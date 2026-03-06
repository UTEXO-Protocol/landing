import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Content-Security-Policy
  // External domains: fonts.googleapis.com (CSS), fonts.gstatic.com (font files),
  // va.vercel-scripts.com (Vercel Analytics dev), vitals.vercel-insights.com (Vercel Analytics reporting)
  // TODO: tighten 'unsafe-inline' and 'unsafe-eval' if nonce-based CSP is adopted
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "img-src 'self' data: blob:",
    "font-src 'self' fonts.gstatic.com",
    "connect-src 'self' *.supabase.co vitals.vercel-insights.com",
    "media-src 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.mp4|.*\\.webm|.*\\.png|.*\\.jpg|.*\\.webp|.*\\.svg|.*\\.woff2|.*\\.woff).*)",
  ],
};
