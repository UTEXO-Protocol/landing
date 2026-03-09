import * as React from "react";
import Link from "next/link";
import { ArrowIcon } from "@/app/static/images";
import "./index.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  iconSize?: { width: number; height: number };
  variant?: "black" | "white" | "grey";
  size?: "default" | "sm" | "lg" | "icon" | "full";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "black", size = "default", href, external, loading, disabled, children, iconOnly, ...props }, ref) => {
  const content = (
    <>
      {iconOnly ? (
        <ArrowIcon />
      ) : (
        <>
          <span>{loading ? "Submitting…" : children}</span>
          {!loading && <ArrowIcon />}
        </>
      )}
    </>
  );

  const inner = (
    <button ref={ref} disabled={disabled || loading} className={`btn btn--${variant} btn--${size} ${className || ""}`} {...props}>
      <span className="btn__content">{content}</span>
    </button>
  );

  if (href) {
    const isExternal = external ?? /^https?:\/\//i.test(href);

    return (
      <Link className={`btn btn--${variant} btn--${size} ${className || ""}`} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        {content} {isExternal && <span className="sr-only">(opens in a new tab)</span>}
      </Link>
    );
  }

  return inner;
});

Button.displayName = "CommonButton";
