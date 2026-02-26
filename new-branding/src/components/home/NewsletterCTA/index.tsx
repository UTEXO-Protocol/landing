"use client";
import { useState, FormEvent, ChangeEvent, useRef } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/common/CommonButton";
import "./index.scss";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const toastIdRef = useRef<string | undefined>(undefined);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || pending) return;

    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toastIdRef.current = toast.error("Please enter a valid email address");
      return;
    }

    setPending(true);
    toastIdRef.current = toast.loading("Submitting…");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, action: "newsletter" }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      toast.success(data?.message ?? "Thanks for signing up! 🎉", {
        id: toastIdRef.current,
      });
      setEmail("");
      toastIdRef.current = undefined;
    } catch (error) {
      console.error("[Newsletter] submit error:", error);
      toast.error("Please try again.", {
        id: toastIdRef.current,
      });
      toastIdRef.current = undefined;
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="newsletter-cta">
      <div className="newsletter-cta__content">
        <h2 className="newsletter-cta__title">
          <span className="newsletter-cta__title-accent">Join</span> the Bitcoin frontier
        </h2>

        <p className="newsletter-cta__description">Join our newsletter and never miss news, tips, and insights.</p>
      </div>

      <form className="newsletter-cta__form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="newsletter-email" className="newsletter-cta__label">
          <span className="newsletter-cta__honeypot">
            Company
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          </span>

          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            disabled={pending}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            autoComplete="email"
            aria-label="Email address"
            className="newsletter-cta__input"
          />
        </label>

        <Button type="submit" disabled={pending || !email} variant="black" className="newsletter-cta__submit">
          {pending ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </section>
  );
};
