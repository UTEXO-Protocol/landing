// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { supabaseSrv } from "@/lib/supabaseServer";
import { sendEmail } from "@/lib/email";
import { renderTemplate } from "@/lib/readHtml";

const PROJECT_TYPES = ["web", "mobile", "design", "consulting", "other"];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = (body.fullName || "").toString().trim();
    const email = (body.email || "").toString().trim().toLowerCase();
    const projectType = (body.projectType || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!fullName) {
      return NextResponse.json({ ok: false, error: "Missing full name." }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ ok: false, error: "Missing email." }, { status: 400 });
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
    }

    if (!PROJECT_TYPES.includes(projectType)) {
      return NextResponse.json({ ok: false, error: "Invalid project type." }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ ok: false, error: "Missing message." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const user_agent = req.headers.get("user-agent") ?? null;

    const { error: insertErr } = await supabaseSrv.from("contact_requests").insert([{ full_name: fullName, email, project_type: projectType, message, ip, user_agent }]);

    if (insertErr) {
      console.error("[contact] insert error", insertErr);
      return NextResponse.json({ ok: false, error: "Could not save record." }, { status: 500 });
    }

    const html = renderTemplate("src/emails/contact.html", {
      fullName,
      email,
      projectType,
      message,
      logo_url: `${process.env.PUBLIC_SITE_URL}/common/UtexoLogoFullBlack.png`,
    });

    await sendEmail(html, `Contact request - ${fullName} (${email})`);

    return NextResponse.json({ ok: true, message: "Your message has been sent. We'll be in touch soon." }, { status: 200 });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}
