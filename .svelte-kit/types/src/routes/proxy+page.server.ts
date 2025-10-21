// @ts-nocheck
// +page.server.ts
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { supabaseSrv } from '$lib/supabaseServer';

import { buildSeo } from '$lib/seo';

export const load = async ({ url }: Parameters<PageServerLoad>[0]) => {
  return {
    seo: buildSeo(url)
  };
};

const SignupSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  source: z.string().trim().optional(),
  company: z.string().optional() // honeypot
});

export const actions = {
  default: async ({ request, getClientAddress }: import('./$types').RequestEvent) => {
    // --- read form data
    const fd = await request.formData();
    const email = String(fd.get('email') ?? '');
    const source = String(fd.get('source') ?? '') || undefined;
    const company = String(fd.get('company') ?? '') || undefined;

    // --- honeypot: if filled, silently succeed without writing
    if (company) return { ok: true, message: 'Thanks for signing up! 🎉' };

    // --- validate input
    const parsed = SignupSchema.safeParse({ email, source, company });
    if (!parsed.success) return { ok: false, error: 'Please enter a valid email.' };

    // --- context
    const ip = getClientAddress?.() || null;
    const ua = request.headers.get('user-agent') || undefined;

    try {
      const { error } = await supabaseSrv
        .from('newsletter_signups')
        .insert({
          email: parsed.data.email,
          source: parsed.data.source,
          ip,
          user_agent: ua
        });

      if (error) {
        // Postgres unique violation
        if ((error as any).code === '23505') {
          return { ok: true, message: 'You’re already on the list. ✅' };
        }
        // Log and surface a friendly message
        console.error('[signup] insert error:', error);
        return {
          ok: false,
          error:
            process.env.NODE_ENV === 'development'
              ? `DB error: ${(error as any).message ?? 'unknown'}`
              : 'Something went wrong. Please try again.'
        };
      }

      return { ok: true, message: 'Thanks for signing up! 🎉' };
    } catch (e: any) {
      console.error('[signup] exception:', e);
      return {
        ok: false,
        error:
          process.env.NODE_ENV === 'development'
            ? `Server exception: ${e?.message ?? e}`
            : 'Something went wrong. Please try again.'
      };
    }
  }
};
;null as any as Actions;