// src/components/DevFinalCTA.tsx
"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DevFinalCTA() {
  const [email, setEmail] = useState("");
  const [pendingAction, setPendingAction] = useState<"dev" | "sales" | null>(
    null
  );

  async function handleInterestSubmit(action: "dev" | "sales") {
  if (!email || pendingAction) return;

  setPendingAction(action);
  const tid = toast.loading("Submitting…");

  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        action,
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.ok) {
      throw new Error(data?.error || "Request failed");
    }

    const defaultMessage =
      action === "sales"
        ? "Thanks, our team will reach out shortly."
        : "Thanks, we'll follow up with dev access details.";

    toast.success(data?.message ?? defaultMessage, { id: tid });
    setEmail("");
  } catch (err) {
    console.error("[Interest] submit error", err);
    toast.error("Please try again.", { id: tid });
  } finally {
    setPendingAction(null);
  }
}

  return (
    <section id="DevCTA" className="bg-black text-white relative z-10">
      <div className="mx-auto w-full sm:w-[640px] md:w-11/12 border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        <div className="relative px-6 sm:px-8 lg:px-9 py-16 lg:py-24">
          {/* Deco (bottom-left), mimic Dev ProductSuite usage */}
          <div
            className="hidden lg:block  absolute pointer-events-none left-20 -bottom-20"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.40))" }}
          >
            <Image
              src="/Group51.webp"
              alt=""
              width={220}
              height={220}
              className="lg:w-[200px] lg:h-auto"
            />
          </div>

          <div className="max-w-[980px] mx-auto text-center">
            <div
              className="mb-4 uppercase text-[12px] text-white/50"
              style={{
                fontFamily: "'Ingram Mono', sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: "130%",
              }}
            >
              BUILD. &nbsp;SCALE. &nbsp;CONNECT.
            </div>

            <h2 className="font-sans text-[40px] sm:text-[64px] lg:text-[96px] leading-[1.02] tracking-[-0.02em] mb-6">
              Ready to build on RGB?
            </h2>

            <p className="text-[15px] lg:text-[16px] text-white/40 mb-10 max-w-[780px] mx-auto">
              Join the developers scaling the Bitcoin economy with Dev Utexo.
            </p>

            {/* Email input + buttons */}
            <div className="max-w-[480px] mx-auto flex flex-col gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                aria-label="Email address"
                className="
                  w-full h-[52px] rounded-[8px]
                  border border-[#2A2A2A] bg-black
                  px-3 text-[12px] font-ingram uppercase tracking-[0.08em]
                  text-white placeholder:text-white/40
                  focus:outline-none focus:ring-2 focus:ring-white/20
                "
              />

              <div className="flex flex-row items-center justify-center gap-3">
                <Button
                  type="button"
                  variant="black"
                  className="!w-48"
                  loading={pendingAction === "dev"}
                  onClick={() => handleInterestSubmit("dev")}
                >
                  request access
                </Button>
                <Button
                  type="button"
                  variant="black"
                  className="!w-48"
                  loading={pendingAction === "sales"}
                  onClick={() => handleInterestSubmit("sales")}
                >
                  talk to sales
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A]" />
      </div>
    </section>
  );
}
