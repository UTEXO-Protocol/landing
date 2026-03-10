import { NextResponse } from "next/server";
import { getSupabaseSrv } from "@/lib/supabaseServer";
import { sendEmail } from "@/lib/email";
import { renderTemplate } from "@/lib/readHtml";
import { COMPANY_TYPE_LABELS, COMPANY_TYPES, HEAR_ABOUT, HEAR_ABOUT_LABELS, REGION_LABELS, REGIONS, USE_CASE_LABELS, USE_CASES, VOLUME_LABELS, VOLUMES } from "@/lib/contact";

import { z } from "zod";
import { isRateLimited, RATE_LIMIT_MAX } from "@/lib/rateLimiter";

const bodySchema = z.object({
  fullName: z.string().trim().default(""),
  email: z.string().trim().toLowerCase(),
  companyName: z.string().trim(),
  jobTitle: z.string().trim().default(""),
  companyType: z.enum(COMPANY_TYPES),
  useCase: z.enum(USE_CASES),
  volume: z
    .string()
    .trim()
    .transform(v => v || undefined)
    .pipe(z.enum(VOLUMES).optional()),
  region: z
    .string()
    .trim()
    .transform(v => v || undefined)
    .pipe(z.enum(REGIONS).optional()),
  message: z.string().trim().default(""),
  hearAbout: z
    .string()
    .trim()
    .transform(v => v || undefined)
    .pipe(z.enum(HEAR_ABOUT).optional()),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          },
        },
      );
    }

    const parsed = bodySchema.safeParse(await req.json());

    if (!parsed.success) {
      const error = parsed.error.issues[0] ?? "Invalid request.";
      return NextResponse.json({ ok: false, error }, { status: 400 });
    }

    const { fullName, email, companyName, jobTitle, companyType, useCase, volume, region, message, hearAbout } = parsed.data;

    // Persistent rate limit: max 3 contact requests per email per hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count: recentCount } = await getSupabaseSrv()
      .from("contact_requests")
      .select("*", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", oneHourAgo);

    if (recentCount !== null && recentCount >= 3) {
      return NextResponse.json(
        { ok: false, error: "Too many requests from this email. Please try again later." },
        { status: 429 },
      );
    }

    const user_agent = req.headers.get("user-agent") ?? null;

    const { error: insertErr } = await getSupabaseSrv().from("contact_requests").insert([
      {
        full_name: fullName || null,
        email,
        company_name: companyName,
        job_title: jobTitle || null,
        company_type: companyType,
        use_case: useCase,
        volume: volume || null,
        region: region || null,
        message: message || null,
        hear_about: hearAbout || null,
        ip,
        user_agent,
      },
    ]);

    if (insertErr) {
      console.error("[contact] insert error", insertErr);
      return NextResponse.json({ ok: false, error: "Could not save record." }, { status: 500 });
    }

    const html = renderTemplate("src/emails/contact.html", {
      fullName: fullName || "—",
      email,
      companyName,
      jobTitle: jobTitle || "—",
      companyType: COMPANY_TYPE_LABELS[companyType] ?? companyType,
      useCase: USE_CASE_LABELS[useCase] ?? useCase,
      volume: (volume && VOLUME_LABELS[volume]) ?? "—",
      region: (region && REGION_LABELS[region]) ?? "—",
      message: message || "—",
      hearAbout: (hearAbout && HEAR_ABOUT_LABELS[hearAbout]) ?? "—",
      logo_url: `${process.env.PUBLIC_SITE_URL}/common/UtexoLogoFullBlack.png`,
    });

    const salesContactEmail = process.env.SALES_CONTACT_EMAIL;
    await sendEmail(html, `Contact request - ${companyName} (${email})`, salesContactEmail);

    const htmlForUser = renderTemplate("src/emails/contactSuccessful.html", {
      fullName: fullName || "—",
      email,
      companyName,
      jobTitle: jobTitle || "—",
      companyType: COMPANY_TYPE_LABELS[companyType] ?? companyType,
      useCase: USE_CASE_LABELS[useCase] ?? useCase,
      volume: (volume && VOLUME_LABELS[volume]) ?? "—",
      region: (region && REGION_LABELS[region]) ?? "—",
      message: message || "—",
      hearAbout: (hearAbout && HEAR_ABOUT_LABELS[hearAbout]) ?? "—",
      logo_url: `${process.env.PUBLIC_SITE_URL}/common/UtexoLogoFullBlack.png`,
      websiteUrl: process.env.PUBLIC_SITE_URL ?? "",
    });

    await sendEmail(htmlForUser, "Thanks for contacting Utexo", email);

    return NextResponse.json({ ok: true, message: "Your message has been sent. We'll be in touch soon." }, { status: 200 });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}
