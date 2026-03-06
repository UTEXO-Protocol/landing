// app/api/signup/route.ts
import { NextResponse } from "next/server";
import { supabaseSrv } from "@/lib/supabaseServer";
import { sendEmail } from "@/lib/email";
import { renderTemplate } from "@/lib/readHtml";
import { calculateFlags, SignupAction } from "@/lib/signupFlags";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email: string = (body.email || "").toString().trim().toLowerCase();
    const action = (body.action || "").toString().trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Missing email." },
        { status: 400 }
      );
    }

    // basic email sanity
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!["dev", "sales", "newsletter"].includes(action)) {
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
        "is_newsletter, wants_dev_access, wants_sales_contact"
      ).eq("email",email).
      maybeSingle()

    if (existingErr) {
      console.error("[dev-interest] select error", existingErr);
      return NextResponse.json(
        { ok: false, error: "Database error." },
        { status: 500 }
      );
    }

    const {
        wants_dev_access,
        wants_sales_contact,
        is_newsletter,
        message,
        flagJustAddedForThisAction,
    } = calculateFlags(action as SignupAction, existing);

    if (existing) {
      const { error: updateErr } = await supabaseSrv
        .from("newsletter_signups")
        .update({
          wants_dev_access,
          wants_sales_contact,
          is_newsletter
        })
        .eq("email", email);

      if (updateErr) {
        console.error("[signup] update error", updateErr);
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
            ip,
            user_agent,
            is_newsletter,
            wants_dev_access,
            wants_sales_contact,
          },
        ]);

      if (insertErr) {
        console.error("[signup] insert error", insertErr);

        if (insertErr.code === "23505") {
          console.log("[signup] duplicate email detected:", email);

          const { error: updateErr } = await supabaseSrv
            .from("newsletter_signups")
            .update({
              wants_dev_access,
              wants_sales_contact,
              is_newsletter,
            })
            .eq("email", email);

          if (updateErr) {
            console.error("[signup] recovery update error", updateErr);
            return NextResponse.json(
              { ok: false, error: "Could not update record." },
              { status: 500 }
            );
          }
        } else {
          return NextResponse.json(
            { ok: false, error: "Could not save record." },
            { status: 500 }
          );
        }
      }
    }

    const templateName = "src/emails/signup.html";

    const html = renderTemplate(templateName, {
        email,
        action,
        isNewRecord: flagJustAddedForThisAction,
        logo_url: `${process.env.PUBLIC_SITE_URL}/UtexoLogoFullBlack.png`,
    });

    await sendEmail(html, email);

    return NextResponse.json(
      { ok: true, message },
      { status: 200 }
    );
  } catch (err) {
      console.error("[signup] unexpected", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}