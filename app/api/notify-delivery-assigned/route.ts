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
 * POST /api/notify-delivery-assigned
 * Called when organization assigns a delivery. Sends email to admin and logs.
 */
export async function POST(request: NextRequest) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ ok: false, skipped: "Email not configured" }, { status: 200 });
    }
    const adminEmail = (process.env.ADMIN_EMAIL || "clarkekhamare@gmail.com").trim();
    if (!adminEmail) return NextResponse.json({ ok: true });

    const body = await request.json();
    const { delivery_id: deliveryId, package_id: packageId, pickup, delivery_to, courier_name } = body;
    if (!deliveryId || !packageId) {
      return NextResponse.json({ error: "delivery_id and package_id required" }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    try {
      await sendEmail({
        to: adminEmail,
        subject: `[OmniWTMS] New delivery assigned: ${packageId}`,
        html: `<p><strong>New delivery assigned</strong> (admin notification)</p>
<p><strong>Package ID:</strong> ${packageId}</p>
<p><strong>Pickup:</strong> ${pickup || "—"}</p>
<p><strong>Delivery to:</strong> ${delivery_to || "—"}</p>
<p><strong>Courier:</strong> ${courier_name || "—"}</p>
<p>Check the dashboard for full details.</p>`,
      });
    } catch (e) {
      console.error("Admin assign email failed:", e);
    }
    try {
      await supabase.from("delivery_audit_log").insert({
        delivery_id: deliveryId,
        action: "delivery_assigned",
        actor_type: "organization",
        new_value: packageId,
        metadata: { package_id: packageId },
      });
    } catch (_) {}
    try {
      await supabase.from("delivery_timeline").insert({
        delivery_id: deliveryId,
        step: "order_processed",
        metadata: { event: "assigned" },
      });
    } catch (_) {}

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Notify delivery assigned error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
