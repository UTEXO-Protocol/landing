import { useState, useRef, useEffect } from "react";
import { downloadAssets } from "@/lib/downloadService";
import "./index.scss";

const FORMATS = ["png", "svg"] as const;
type Format = (typeof FORMATS)[number];

type LoadingButtonProps = {
  iconNames: string[];
  theme: "dark" | "white";
  hasTheme: boolean;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({ iconNames, theme, hasTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleDownload = async (format: Format) => {
    try {
      const colorView = theme === "dark" ? "white" : "dark";

      await downloadAssets({
        iconNames: iconNames,
        format: format,
        themes: theme && hasTheme ? [colorView] : undefined,
      });
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  const buttonClassName = `loading-button${hasTheme ? ` loading-button--${theme}` : ""}`;

  return (
    <div className="loading-button-wrapper" ref={dropdownRef}>
      <button className={buttonClassName} onClick={toggleDropdown} type="button" aria-label="Download icon" aria-expanded={isDropdownOpen}>
        <span className="loading-button__icon loading-button__icon--default" aria-hidden="true" />
        <span className="loading-button__icon loading-button__icon--hover" aria-hidden="true" />
      </button>

      {isDropdownOpen && (
        <div className="loading-button__dropdown" role="menu">
          {FORMATS.map(format => (
            <button key={format} className="loading-button__dropdown-item" onClick={() => handleDownload(format)} type="button" role="menuitem">
              {format.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
