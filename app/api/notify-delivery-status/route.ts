import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://qpkaklmbiwitlroykjim.supabase.co";
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwa2FrbG1iaXdpdGxyb3lramltIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjgxMzg2MiwiZXhwIjoyMDUyMzg5ODYyfQ.IBTdBXb3hjobEUDeMGRNbRKZoavL0Bvgpyoxb1HHr34";

/**
 * POST /api/notify-delivery-status
 * Body: { delivery_id: string, new_status: string, notify_organization?: boolean, triggered_by?: "organization" | "courier" }
 * Customer receives email ONLY when triggered_by === "organization".
 * When courier updates: audit/timeline + admin email only (no customer, no org email).
 * When organization updates: customer email + admin; org email only if sendToOrg.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { delivery_id: deliveryId, new_status: newStatus, notify_organization: notifyOrg, triggered_by: triggeredBy, pod_file: podFileFromBody } = body;
    const sendToOrg = notifyOrg !== false;
    if (!deliveryId || !newStatus) {
      return NextResponse.json(
        { error: "delivery_id and new_status are required" },
        { status: 400 }
      );
    }
    const emailConfigured = process.env.EMAIL_USER != null && process.env.EMAIL_PASS != null;
    const adminEmail = (process.env.ADMIN_EMAIL || "clarkekhamare@gmail.com").trim();
    const statusLabel =
      newStatus === "completed"
        ? "Completed"
        : newStatus === "failed"
        ? "Failed"
        : newStatus === "out_for_delivery"
        ? "Out for delivery"
        : "In progress";

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { data: delivery, error } = await supabase
      .from("deliveries")
      .select(
        `
        id,
        package_id,
        status,
        pod_file,
        shipping_label,
        client_id,
        customer_id,
        clients!client_id ( email ),
        customers!customer_id ( email, name )
      `
      )
      .eq("id", deliveryId)
      .single();

    if (error || !delivery) {
      console.error("Notify delivery status: fetch error", error);
      return NextResponse.json(
        { error: error?.message ?? "Delivery not found" },
        { status: 404 }
      );
    }

    const packageId = delivery.package_id ?? deliveryId;
    const previousStatus = (delivery as any).status;
    const podFile = (delivery as any).pod_file || podFileFromBody;

    // Always write audit + timeline (even when email not configured)
    try {
      await supabase.from("delivery_audit_log").insert({
        delivery_id: deliveryId,
        action: "status_updated",
        actor_type: triggeredBy === "organization" ? "organization" : "courier",
        old_value: previousStatus,
        new_value: newStatus,
        metadata: { package_id: packageId, ...(podFile && newStatus === "completed" ? { pod_file: podFile } : {}) },
      });
    } catch (e) {
      console.warn("Audit log insert skipped:", e);
    }
    if (newStatus === "completed" && podFile) {
      try {
        await supabase.from("delivery_audit_log").insert({
          delivery_id: deliveryId,
          action: "pod_uploaded",
          actor_type: triggeredBy === "organization" ? "organization" : "courier",
          new_value: podFile,
          metadata: { package_id: packageId },
        });
      } catch (e) {
        console.warn("Audit pod_uploaded insert skipped:", e);
      }
    }
    try {
      const step = newStatus === "completed" ? "delivered" : newStatus === "out_for_delivery" ? "out_for_delivery" : newStatus === "in_progress" ? "at_facility" : newStatus === "pending" ? "order_processed" : newStatus;
      await supabase.from("delivery_timeline").insert({
        delivery_id: deliveryId,
        step,
        metadata: { status: newStatus },
      });
    } catch (e) {
      console.warn("Timeline insert skipped:", e);
    }

    const fromTo =
      delivery.shipping_label?.from && delivery.shipping_label?.to
        ? `From: ${delivery.shipping_label.from}<br/>To: ${delivery.shipping_label.to}`
        : "";
    const podLinkHtml = podFile
      ? `<p><strong>Proof of delivery:</strong> <a href="${podFile}" target="_blank" rel="noopener">View POD</a></p>`
      : "";

    const baseHtml = `
      <p><strong>Delivery status update</strong></p>
      <p><strong>Package ID:</strong> ${packageId}</p>
      <p><strong>New status:</strong> ${statusLabel}</p>
      ${fromTo ? `<p>${fromTo}</p>` : ""}
      ${podLinkHtml}
      <p>Check your dashboard for full details.</p>
    `;

    let emailed = false;
    if (emailConfigured) {
      // Organization: only when org triggered the update (so org sees its own status changes, not when courier updates)
      const orgEmail =
        (delivery.clients as { email?: string } | null)?.email?.trim?.() || "";
      if (sendToOrg && orgEmail && triggeredBy === "organization") {
        try {
          await sendEmail({
            to: orgEmail,
            subject: `Delivery ${statusLabel}: ${packageId}`,
            html: `<p>Delivery status has been updated.</p>${baseHtml}`,
          });
          emailed = true;
        } catch (e) {
          console.error("Notify org email failed:", e);
        }
      }

      // Customer: ONLY when organization updates status (never when courier updates)
      const customerRow = delivery.customers as { email?: string; name?: string } | null;
      const customerEmail = customerRow?.email?.trim?.() || "";
      if (customerEmail && triggeredBy === "organization") {
        try {
          const name = customerRow?.name ? ` ${customerRow.name}` : "";
          await sendEmail({
            to: customerEmail,
            subject: newStatus === "completed" ? `Your delivery has been delivered – ${packageId}` : `Your delivery is ${statusLabel.toLowerCase()} – ${packageId}`,
            html: `<p>Hello${name},</p><p>Your parcel delivery status has been updated.</p>${baseHtml}
<p><strong>Your tracking number:</strong> <code style="background:#f0f0f0;padding:2px 6px;border-radius:4px;">${packageId}</code></p>
<p>Log in to the customer dashboard and go to <strong>Track Delivery</strong>. Enter this tracking number to see complete tracking, expected arrival, and progress.</p>
<p>You can also view it in <strong>My Deliveries</strong>.</p>`,
          });
          emailed = true;
        } catch (e) {
          console.error("Notify customer email failed:", e);
        }
      }

      if (adminEmail) {
        try {
          await sendEmail({
            to: adminEmail,
            subject: `[OmniWTMS] Delivery ${statusLabel}: ${packageId}`,
            html: `<p><strong>Delivery status update</strong> (admin notification)</p>
${baseHtml}
<p><strong>Triggered by:</strong> ${triggeredBy === "organization" ? "Organization" : "Courier"}</p>
<p>Customer and organization have been notified where applicable.</p>`,
          });
          emailed = true;
        } catch (e) {
          console.error("Notify admin email failed:", e);
        }
        try {
          await supabase.from("delivery_audit_log").insert({
            delivery_id: deliveryId,
            action: "email_sent",
            actor_type: "system",
            new_value: "admin",
            metadata: { to: adminEmail, subject: `Delivery ${statusLabel}: ${packageId}` },
          });
        } catch (_) {}
      }
    }

    return NextResponse.json({ ok: true, emailed: emailConfigured && emailed, audit_and_timeline: true });
  } catch (err) {
    console.error("Notify delivery status error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to notify" },
      { status: 500 }
    );
  }
}
