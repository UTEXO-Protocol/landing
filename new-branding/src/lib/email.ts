// src/lib/email.ts
import "server-only";
import nodemailer from "nodemailer";

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_DEV_TO = process.env.EMAIL_DEV_TO;

const EMAIL_CONFIGURED = !!(EMAIL_HOST && EMAIL_PASSWORD && EMAIL_FROM && EMAIL_DEV_TO);
export const STRICT_EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isValidEmail = (s: string) => !s.includes("\n") && STRICT_EMAIL_RE.test(s.trim());

function sanitizeRecipient(email: string): string {
  const trimmed = email.trim();

  if (/[,;\s]/.test(trimmed)) {
    throw new Error("Only a single recipient is allowed");
  }

  if (!isValidEmail(trimmed)) {
    throw new Error("Invalid recipient email address");
  }

  return trimmed;
}

export async function sendEmail(html: string, subject: string, receiver?: string) {
  if (!EMAIL_CONFIGURED) {
    return;
  }

  const to = sanitizeRecipient(receiver ?? EMAIL_DEV_TO);

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT) || 587,
    secure: (Number(EMAIL_PORT) || 587) === 465,
    auth: {
      user: EMAIL_FROM,
      pass: EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to,
      subject,
      html,
    });
  } catch {
    console.log(1);
    throw new Error("Failed to send email");
  }
}
