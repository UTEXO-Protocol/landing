import * as React from "react";
import Link from "next/link";
import "./index.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  iconSize?: { width: number; height: number };
  variant?: "black" | "white";
  size?: "default" | "sm" | "lg" | "icon";
}

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <span className={`btn__icon-wrapper ${className || ""}`}>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn__icon btn__icon--default">
        <path
          d="M12.5 4.35355L12.8536 3.99999L13.2071 4.35355L12.8536 4.7071L12.5 4.35355ZM0.5 4.85355C0.223858 4.85355 0 4.62969 0 4.35355C0 4.0774 0.223858 3.85355 0.5 3.85355V4.35355V4.85355ZM8.5 0.353546L8.85355 -7.24196e-06L12.8536 3.99999L12.5 4.35355L12.1464 4.7071L8.14645 0.7071L8.5 0.353546ZM12.5 4.35355L12.8536 4.7071L8.85355 8.7071L8.5 8.35355L8.14645 7.99999L12.1464 3.99999L12.5 4.35355ZM12.5 4.35355V4.85355H0.5V4.35355V3.85355H12.5V4.35355Z"
          fill="currentColor"
        />
      </svg>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn__icon btn__icon--hover">
        <path
          d="M12.5 4.35355L12.8536 3.99999L13.2071 4.35355L12.8536 4.7071L12.5 4.35355ZM0.5 4.85355C0.223858 4.85355 0 4.62969 0 4.35355C0 4.0774 0.223858 3.85355 0.5 3.85355V4.85355V4.85355ZM8.5 0.353546L8.85355 -7.24196e-06L12.8536 3.99999L12.5 4.35355L12.1464 4.7071L8.14645 0.7071L8.5 0.353546ZM12.5 4.35355L12.8536 4.7071L8.85355 8.7071L8.5 8.35355L8.14645 7.99999L12.1464 3.99999L12.5 4.35355ZM12.5 4.35355V4.85355H0.5V4.35355V3.85355H12.5V4.35355Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

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
      <div className="btn-wrapper">
        <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="btn-wrapper__link">
          {inner}
        </Link>
      </div>
    );
  }

  return inner;
});

Button.displayName = "CommonButton";
