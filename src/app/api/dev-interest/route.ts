// app/api/dev-interest/route.ts
import { NextResponse } from "next/server";
import { supabaseSrv } from "@/lib/supabaseServer";
import { sendTelegramMessage } from "@/lib/telegram";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Missing body." },
        { status: 400 }
      );
    }

    const email = (body.email || "").toString().trim().toLowerCase();
    const action = (body.action || "").toString().trim(); // "dev" | "sales"
    const source = (body.source || "dev-page").toString().trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Missing email." },
        { status: 400 }
      );
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!["dev", "sales"].includes(action)) {
      return NextResponse.json(
        { ok: false, error: "Invalid action." },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const user_agent = req.headers.get("user-agent") ?? null;

    // Check if email already exists
    const { data: existing, error: existingErr } = await supabaseSrv
      .from("newsletter_signups")
      .select(
        "id, is_newsletter, wants_dev_access, wants_sales_contact"
      )
      .eq("email", email)
      .maybeSingle();

    if (existingErr) {
      console.error("[dev-interest] select error", existingErr);
      return NextResponse.json(
        { ok: false, error: "Database error." },
        { status: 500 }
      );
    }

    const wants_dev_access =
      (existing?.wants_dev_access ?? false) || action === "dev";
    const wants_sales_contact =
      (existing?.wants_sales_contact ?? false) || action === "sales";

    // auto-subscribe dev/sales requests to newsletter
    const is_newsletter = true;
    
    if (existing) {
      // Update flags on existing row
      const { error: updateErr } = await supabaseSrv
        .from("newsletter_signups")
        .update({
          wants_dev_access,
          wants_sales_contact,
          is_newsletter,
          source,
        })
        .eq("id", existing.id);

      if (updateErr) {
        console.error("[dev-interest] update error", updateErr);
        return NextResponse.json(
          { ok: false, error: "Could not update record." },
          { status: 500 }
        );
      }
    } else {
      // Insert new row
      const { error: insertErr } = await supabaseSrv
        .from("newsletter_signups")
        .insert([
          {
            email,
            source,
            ip,
            user_agent,
            is_newsletter,
            wants_dev_access,
            wants_sales_contact,
          },
        ]);

      if (insertErr) {
        console.error("[dev-interest] insert error", insertErr);
        return NextResponse.json(
          { ok: false, error: "Could not save record." },
          { status: 500 }
        );
      }
    }

    // Telegram alert
    const title =
      action === "sales"
        ? "💼 New Talk-to-Sales request"
        : "🛰 New Dev Utexo access request";

    const flagsLine = `Newsletter: ${
      is_newsletter ? "✅" : "❌"
    } • Dev access: ${wants_dev_access ? "✅" : "❌"} • Sales: ${
      wants_sales_contact ? "✅" : "❌"
    }`;

    const lines = [
      `<b>${title}</b>`,
      "",
      `Email: ${escapeHtml(email)}`,
      `Source: ${escapeHtml(source)}`,
      flagsLine,
    ];

    await sendTelegramMessage(lines.join("\n"), { parseMode: "HTML" });

    return NextResponse.json(
      { ok: true, message: "Request received." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[dev-interest] unexpected", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
