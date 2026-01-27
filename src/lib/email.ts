// src/lib/email.ts
import "server-only";
import nodemailer from "nodemailer";

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_DEV_TO = process.env.EMAIL_DEV_TO;

if (!EMAIL_HOST) {
  console.warn("Missing EMAIL_HOST");
}
if (!EMAIL_PASSWORD) {
  console.warn("Missing EMAIL_PASSWORD");
}
if (!EMAIL_FROM) {
  console.warn("Missing EMAIL_FROM");
}
if (!EMAIL_DEV_TO) {
  console.warn("Missing EMAIL_DEV_TO");
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT) || 587,
    secure: (Number(EMAIL_PORT) || 587) === 465,
    auth: {
      user: EMAIL_FROM,
      pass: EMAIL_PASSWORD,
    },
  });

  return transporter;
}

export async function sendEmail(
  text: string
) {
  if (!EMAIL_HOST || !EMAIL_FROM || !EMAIL_DEV_TO || !EMAIL_PASSWORD) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Email env vars missing, not sending:", text);
    }
    return;
  }

  const transporter = getTransporter();

  try {
    const mailOptions = {
      from: EMAIL_FROM,
      to: EMAIL_DEV_TO,
      subject: "Notification",
      html: text,
    };

    const res = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", res.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}