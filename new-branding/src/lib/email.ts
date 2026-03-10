// src/lib/email.ts
import "server-only";
import nodemailer from "nodemailer";

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_DEV_TO = process.env.EMAIL_DEV_TO;

const EMAIL_CONFIGURED = !!(EMAIL_HOST && EMAIL_PASSWORD && EMAIL_FROM && EMAIL_DEV_TO);

export async function sendEmail(html: string, subject: string, reciever?: string) {
  if (!EMAIL_CONFIGURED) {
    return;
  }

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
    const res = await transporter.sendMail({
      from: EMAIL_FROM,
      to: reciever ?? EMAIL_DEV_TO,
      subject,
      html,
    });
    return res.messageId;
  } catch {
    throw new Error("Failed to send email");
  }
}
