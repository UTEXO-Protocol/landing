"use client";
import { useState } from "react";
import Image from "next/image";
import { LoadingButton } from "@/components/brand-kit/Downloads/LoadingButton";
import "./index.scss";

type IconWrapperProps = {
  badge: string;
  iconName: string;
  hasTheme?: boolean;
  iconClassName?: string;
};

export const IconWrapper: React.FC<IconWrapperProps> = ({ badge, iconName, hasTheme = true, iconClassName = "" }) => {
  const [theme, setTheme] = useState<"dark" | "white">("dark");
  const representTheme = theme === "dark" ? "white" : "dark";

  return (
    <div className={`icon-wrapper icon-wrapper--${theme}`}>
      <div className="icon-wrapper__container">
        <p className="icon-wrapper__label">{badge}</p>

        <div className="icon-wrapper__preview">
          <div className="icon-wrapper__logo-container">
            <div className="icon-wrapper__logo-placeholder">
              <Image src={`/brand-kit/downloads/${iconName}${hasTheme ? `-${representTheme}` : ""}.svg`} alt="Utexo Logo" width={200} height={200} className={iconClassName} />
            </div>
          </div>
        </div>

        {hasTheme && (
          <div className={`icon-wrapper__theme  icon-wrapper__theme--${theme}`}>
            <button className="icon-wrapper__theme-btn" onClick={() => setTheme("dark")}>
              DARK
            </button>
            <button className="icon-wrapper__theme-btn" onClick={() => setTheme("white")}>
              WHITE
            </button>
          </div>
        )}
        <div className="icon-wrapper__load-btn">
          <LoadingButton iconNames={[iconName]} theme={theme} hasTheme={hasTheme} />
        </div>
      </div>
    </div>
  );
};
