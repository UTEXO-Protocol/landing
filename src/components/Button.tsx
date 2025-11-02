// import Image from "next/image";

// interface ButtonProps {
//   variant?: 'primary' | 'secondary' | 'black';
//   children?: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
//   href?: string; 
//   iconOnly?: boolean;
//   iconRotation?: string;
//   iconSize?: { width: number; height: number };
// }

// export default function Button({ 
//   variant = 'primary', 
//   children, 
//   className = '', 
//   onClick,
//   href, 
//   iconOnly = false,
//   iconRotation = '',
//   iconSize = { width: 12, height: 10 }
// }: ButtonProps) {
//   const getBackgroundStyle = () => {
//     switch (variant) {
//       case 'black':
//         return {
//           background: '#000000',
//         };
//       case 'secondary':
//         return {
//           background: 'linear-gradient(180deg, rgba(255, 252, 244, 0.1) 0%, rgba(255, 241, 229, 0.05) 100%)',
//           backdropFilter: 'blur(24.63px)',
//           WebkitBackdropFilter: 'blur(24.63px)',
//         };
//       default:
//         return {
//           background: 'linear-gradient(180deg, rgba(255, 252, 244, 0.1) 0%, rgba(255, 241, 229, 0.05) 100%)',
//           backdropFilter: 'blur(24.63px)',
//           WebkitBackdropFilter: 'blur(24.63px)',
//         };
//     }
//   };

//   const hoverClass = variant === 'black' ? 'hover:bg-gray-800' : 'hover:border-white/30';
  // const baseClass = iconOnly 
  //   ? `text-white transition-all flex items-center justify-center cursor-pointer ${hoverClass}`
  //   : `w-[144px] h-[55px] text-white text-[13px] font-medium transition-all rounded-lg flex items-center justify-center gap-2 uppercase border border-white/10 cursor-pointer ${hoverClass}`;
// const baseClass = iconOnly
//     ? `text-white transition-all flex items-center justify-center cursor-pointer ${hoverClass} relative overflow-hidden`
//     : `w-[144px] h-[55px] text-white text-[13px] font-medium transition-all rounded-lg flex items-center justify-center gap-2 uppercase border border-white/10 cursor-pointer ${hoverClass} relative overflow-hidden`;

// return (
//     <>
//       {href ? (
//         <Link href={href} passHref>
//           <button
//             onClick={onClick}
//             className={`${baseClass} ${className}`}
//             style={{
//               fontFamily: iconOnly ? undefined : "Roboto Mono, monospace",
//               ...getBackgroundStyle(),
//             }}
//           >
//             {iconOnly ? (
//               <Image
//                 src="/Vector.png"
//                 alt="arrow"
//                 width={iconSize.width}
//                 height={iconSize.height}
//                 className={iconRotation}
//               />
//             ) : (
//               <>
//                 <span className="font-bold font-mono">{children || "get started"}</span>
//                 <Image src="/Vector.png" alt="arrow-right" width={iconSize.width} height={iconSize.height} />
//               </>
//             )}
//             {/* Ice/Glare Effect */}
//             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
//           </button>
//         </Link>
//       ) : (
//         <button
//           onClick={onClick}
//           className={`${baseClass} ${className}`}
//           style={{
//             fontFamily: iconOnly ? undefined : "Roboto Mono, monospace",
//             ...getBackgroundStyle(),
//           }}
//         >
//           {iconOnly ? (
//             <Image
//               src="/Vector.png"
//               alt="arrow"
//               width={iconSize.width}
//               height={iconSize.height}
//               className={iconRotation}
//             />
//           ) : (
//             <>
//               <span className="font-bold font-mono">{children || "get started"}</span>
//               <Image src="/Vector.png" alt="arrow-right" width={iconSize.width} height={iconSize.height} />
//             </>
//           )}
//           {/* Ice/Glare Effect */}
//           <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
//         </button>
//       )}
//     </>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import type * as React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "black";
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  external?: boolean;
  iconOnly?: boolean;
  iconRotation?: string;
  iconSize?: { width: number; height: number };
  liquid?: boolean;
  glare?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
  href,
  external,
  iconOnly = false,
  iconRotation = "",
  iconSize = { width: 12, height: 10 },
  liquid = true,
  glare = true,
  loading = false,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const getBackgroundStyle = () => {
    switch (variant) {
      case "black":
        return { background: "#000" };
      case "primary":
        return {
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        };
      case "secondary":
      default:
        return {
          background:
            "linear-gradient(180deg, rgba(255,252,244,0.10) 0%, rgba(255,241,229,0.05) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        };
    }
  };

  const hoverClass =
    variant === "black" ? "hover:bg-gray-800" : "hover:border-white/30";

  const baseClass = iconOnly
    ? `relative overflow-hidden text-white transition-all flex items-center justify-center cursor-pointer ${hoverClass}`
    : `relative overflow-hidden w-[144px] h-[55px] text-white text-[12px] font-medium transition-all rounded-lg flex items-center justify-center gap-2 uppercase border border-white/10 cursor-pointer ${hoverClass}`;

  const chromeLayers =
    liquid && glare
      ? ` btn-liquid btn-glass will-change-transform
          [&::before]:animate-[float-a_6s_ease-in-out_infinite]
          [&::before]:[animation-direction:alternate]`
      : glare
      ? `btn-glass` // Only the shine
      : ""; // Plain button

  const style = {
    fontFamily: iconOnly ? undefined : "Ingram Mono, monospace",
    ...getBackgroundStyle(),
  };

  const label = loading ? "Submitting…" : (children ?? "get started");

  const contents = (
    <>
      {iconOnly ? (
        <Image
          src="/Vector.png"
          alt="arrow"
          width={iconSize.width}
          height={iconSize.height}
          className={iconRotation}
        />
      ) : (
        <>
          <span className="font-bold font-ingram">{label}</span>
          {!loading && (
            <Image
              src="/Vector.png"
              alt="arrow-right"
              width={iconSize.width}
              height={iconSize.height}
            />
          )}
        </>
      )}
    </>
  );

  const classes = `${baseClass} ${chromeLayers} group active:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed ${className}`;

  // --- Auto-detect link type ---
  const isHash = !!href && href.startsWith("#");
  const isInternalPath = !!href && href.startsWith("/");
  const looksAbsolute = !!href && /^https?:\/\//i.test(href);

  // If `external` is explicitly passed, use it; else only absolute URLs are external
  const isExternal = external ?? (looksAbsolute && !isHash && !isInternalPath);

  if (href) {
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          onClick?.(e);
        }}
        data-variant={variant}
        className={classes}
        style={style}
        aria-busy={loading || undefined}
        aria-disabled={disabled || undefined}
      >
        {contents}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      data-variant={variant}
      className={classes}
      style={style}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {contents}
    </button>
  );
}
