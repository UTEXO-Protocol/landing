// import { NextResponse } from "next/server";
// import { supabaseSrv } from "@/lib/supabaseServer"; 

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const email = (body.email || "").toString().trim().toLowerCase();
//     const source = (body.source || "website").toString();
//     const company = (body.company || "").toString().trim(); // honeypot

//     if (!email) {
//       return NextResponse.json(
//         { ok: false, error: "Missing email." },
//         { status: 400 }
//       );
//     }

//     // Honeypot filled? bot.
//     if (company !== "") {
//       return NextResponse.json(
//         { ok: true, message: "Thanks!" },
//         { status: 200 }
//       );
//     }

//     // basic email sanity
//     if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
//       return NextResponse.json(
//         { ok: false, error: "Invalid email address." },
//         { status: 400 }
//       );
//     }

//     // Check if already exists
//     const { data: existing, error: existingErr } = await supabaseSrv
//       .from("newsletter_signups")
//       .select("id")
//       .eq("email", email)
//       .maybeSingle();

//     if (existingErr) {
//       console.error("[newsletter] select error", existingErr);
//       return NextResponse.json(
//         { ok: false, error: "Database error." },
//         { status: 500 }
//       );
//     }

//     if (existing) {
//       return NextResponse.json(
//         {
//           ok: true,
//           message: "You're already on the list. 🙌",
//         },
//         { status: 200 }
//       );
//     }

//     // Insert new row
//     const { error: insertErr } = await supabaseSrv
//       .from("newsletter_signups")
//       .insert([
//         {
//           email,
//           source,
//         },
//       ]);

//     if (insertErr) {
//       console.error("[newsletter] insert error", insertErr);
//       return NextResponse.json(
//         { ok: false, error: "Could not save email." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       {
//         ok: true,
//         message: "Thanks for signing up! 🎉",
//       },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("[newsletter] unexpected", err);
//     return NextResponse.json(
//       { ok: false, error: "Unexpected server error." },
//       { status: 500 }
//     );
//   }
// }

// app/api/newsletter/route.ts
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
    const body = await req.json();

    const email = (body.email || "").toString().trim().toLowerCase();
    const source = (body.source || "website").toString();
    const company = (body.company || "").toString().trim(); // honeypot

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Missing email." },
        { status: 400 }
      );
    }

    // Honeypot filled? bot.
    if (company !== "") {
      return NextResponse.json(
        { ok: true, message: "Thanks!" },
        { status: 200 }
      );
    }

    // basic email sanity
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Check if already exists
    const { data: existing, error: existingErr } = await supabaseSrv
      .from("newsletter_signups")
      .select("id, is_newsletter")
      .eq("email", email)
      .maybeSingle();

    if (existingErr) {
      console.error("[newsletter] select error", existingErr);
      return NextResponse.json(
        { ok: false, error: "Database error." },
        { status: 500 }
      );
    }

    if (existing) {
      // Make sure the flag is set even if it was created via dev/sales earlier
      const { error: updateErr } = await supabaseSrv
        .from("newsletter_signups")
        .update({ is_newsletter: true, source })
        .eq("id", existing.id);

      if (updateErr) {
        console.error("[newsletter] update error", updateErr);
        return NextResponse.json(
          { ok: false, error: "Could not update email." },
          { status: 500 }
        );
      }

      // Telegram alert (already known email but new newsletter flag)
      const textLinesExisting = [
        "<b>📧 Existing email subscribed to newsletter</b>",
        "",
        `Email: ${escapeHtml(email)}`,
        `Source: ${escapeHtml(source)}`,
      ];
      await sendTelegramMessage(textLinesExisting.join("\n"), {
        parseMode: "HTML",
      });

      return NextResponse.json(
        {
          ok: true,
          message: "You're already on the list. 🙌",
        },
        { status: 200 }
      );
    }

    // Insert new row for brand new email
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const user_agent = req.headers.get("user-agent") ?? null;


    const { error: insertErr } = await supabaseSrv
      .from("newsletter_signups")
      .insert([
        {
          email,
          source,
          ip,
          user_agent,
          is_newsletter: true,
          wants_dev_access: false,
          wants_sales_contact: false,
        },
      ]);

    if (insertErr) {
      console.error("[newsletter] insert error", insertErr);
      return NextResponse.json(
        { ok: false, error: "Could not save email." },
        { status: 500 }
      );
    }

    // Telegram alert for new signup
    const textLinesNew = [
      "<b>📧 New newsletter signup</b>",
      "",
      `Email: ${escapeHtml(email)}`,
      `Source: ${escapeHtml(source)}`,
    ];

    await sendTelegramMessage(textLinesNew.join("\n"), {
      parseMode: "HTML",
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Thanks for signing up! 🎉",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[newsletter] unexpected", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
