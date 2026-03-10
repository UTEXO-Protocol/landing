/**
 * In-memory rate limiter with automatic cleanup.
 *
 * LIMITATION: On Vercel serverless, each function invocation may get
 * its own memory space. This rate limiter only works within a single
 * warm instance. For production-grade rate limiting, migrate to a
 * persistent store (Upstash Redis, Vercel KV, or Supabase).
 *
 * This is a best-effort defense — the real protection comes from
 * input validation and email sanitization in the route handlers.
 */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const CLEANUP_INTERVAL_MS = 5 * 60_000; // Clean up every 5 minutes
const MAX_ENTRIES = 10_000; // Hard cap to prevent memory exhaustion

let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(key);
    }
  }
}

export function isRateLimited(key: string): boolean {
  cleanup();

  // Hard cap: if map is full, reject request (fail closed)
  if (rateLimitMap.size >= MAX_ENTRIES && !rateLimitMap.has(key)) {
    return true;
  }

  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}
