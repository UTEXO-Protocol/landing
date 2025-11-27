// src/lib/telegram.ts
import "server-only";

const TELEGRAM_API_URL = "https://api.telegram.org";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_DEV_CHAT_ID = process.env.TELEGRAM_DEV_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN) {
  console.warn("Missing TELEGRAM_BOT_TOKEN");
}
if (!TELEGRAM_DEV_CHAT_ID) {
  console.warn("Missing TELEGRAM_DEV_CHAT_ID");
}

type ParseMode = "MarkdownV2" | "HTML";

interface SendTelegramOptions {
  chatIdOverride?: string;
  parseMode?: ParseMode;
}

export async function sendTelegramMessage(
  text: string,
  { chatIdOverride, parseMode }: SendTelegramOptions = {}
) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_DEV_CHAT_ID) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Telegram env vars missing, not sending:", text);
    }
    return;
  }

  const chat_id = chatIdOverride ?? TELEGRAM_DEV_CHAT_ID;

  try {
    const res = await fetch(
      `${TELEGRAM_API_URL}/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id,
          text,
          parse_mode: parseMode,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Telegram sendMessage failed", res.status, body);
    }
  } catch (err) {
    console.error("Error sending Telegram message:", err);
  }
}
