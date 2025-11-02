"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Button from "@/components/Button";
import Image from "next/image";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || pending) return;

    setPending(true);
    const tid = toast.loading("Submitting…");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "website-main",
          company: "", // honeypot intentionally empty
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Signup failed");

      toast.success(data?.message ?? "Thanks for signing up! 🎉", { id: tid });
      setEmail("");
    } catch {
      toast.error("Please try again.", { id: tid });
    } finally {
      setPending(false);
    }
  }

  return (
    <section
      id="newsletter"
      className="
        relative w-full
        bg-[#D4D4D4] text-black
        
        px-4 sm:px-0
      "
    >
      {/* inner frame so the #E2E2E2 bg stays within the borders */}
      <div
        className="
          relative mx-auto
          w-full sm:w-[640px] md:w-[900px] lg:w-[1320px]
          py-16 md:py-24
          border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px] border-[#C6C6C6]
          bg-[#E2E2E2]
        "
      >
        <div className="mx-auto max-w-[900px] text-center">
          {/* top microcopy */}
          <p className="font-ingram text-[11px] uppercase tracking-[0.08em] text-[#6a6a6a]">
            Zero spam. Pure signal.
          </p>

          {/* headline */}
          <h2 className="mt-3 text-2xl md:text-5xl leading-[1.1] font-sans font-medium">
            Join the Bitcoin 
             frontier
          </h2>

          {/* bottom helper line */}
          <p className="mt-4 text-[13px] px-10 md:px-0 leading-relaxed text-[#6a6a6a] font-ingram">
            Join our newsletter and never miss news, tips, and insights.
          </p>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 mx-auto flex w-full max-w-[440px] flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            {/* honeypot */}
            <div className="sr-only" aria-hidden="true">
              <label>
                Company
                <input name="company" autoComplete="organization" tabIndex={-1} />
              </label>
            </div>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              autoComplete="email"
              aria-label="Email address"
              className="
                w-full h-[55px] flex-1 rounded-[8px]
                border border-[#C6C6C6] bg-[#d4d4d4]
                px-3 py-[10px] leading-none appearance-none 
                text-[11px] font-ingram uppercase tracking-[0.08em]
                text-black placeholder:text-[#8f8f8f]
                focus:outline-none focus:ring-2 focus:ring-black/20
              "
            />

{/*            <button
              type="submit"
              disabled={pending}
              className="
                inline-flex shrink-0 items-center justify-center
                rounded-[8px] border border-black bg-black
                px-4 py-[10px]
                text-[11px] font-mono font-medium uppercase leading-none tracking-[0.08em]
                text-white hover:bg-white hover:text-black
                disabled:opacity-60 transition
              "
            >
              <span className="mr-1">{pending ? "..." : "Sign Up"}</span>
              <span aria-hidden>➔</span>
            </button>*/}
{/*            <button
              type="submit"
              disabled={pending}
              className="
                relative inline-flex items-center justify-center
                w-[144px] h-[55px] rounded-lg border border-white/10
                bg-black text-white text-[13px] font-mono font-bold uppercase
                transition-all active:scale-[0.98] cursor-pointer
                hover:bg-gray-800 
              "
            >
              <span className="flex items-center gap-2">
                {pending ? "..." : "Sign Up"}
                <img
                  src="/Vector.png"
                  alt="arrow"
                  width={12}
                  height={10}
                  className="inline-block"
                />
              </span>
            </button>*/}
              <Button
              variant="black"
              type="submit"
              loading={pending}
              className=""
            >
              Sign Up

            </Button>
          </form>
        </div>

        {/* 3D coin on the left with float animation */}
<div
  className="
    pointer-events-none hidden md:block absolute
    left-[20px] md:left-[40px] lg:left-[60px]
    bottom-[-30px] md:bottom-[-40px]
    w-[90px] md:w-[120px] lg:w-[140px]
    animate-floatRing float-delay
  "
>
  <Image
    src="/Group51.webp"
    alt=""
    aria-hidden="true"
    // intrinsic ratio only; Tailwind controls actual size
    width={140}
    height={140}
    className="w-full h-auto"
    sizes="(max-width: 768px) 90px,
           (max-width: 1024px) 120px,
           140px"
    priority={false}
  />
</div>
      </div>
    </section>
  );
}
