import nodemailer from "nodemailer";

/**
 * Send email via SMTP. Uses EMAIL_USER and EMAIL_PASS from env.
 * Used by /api/send-email and /api/notify-delivery-status.
 */
export async function sendEmail(options: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}): Promise<void> {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    throw new Error("EMAIL_USER or EMAIL_PASS not set");
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
  const toList = Array.isArray(options.to) ? options.to : [options.to];
  await transporter.sendMail({
    from: `"OmniWTMS" <${user}>`,
    to: toList.join(", "),
    subject: options.subject,
    text: options.text ?? options.html.replace(/<[^>]*>/g, ""),
    html: options.html,
  });
}
