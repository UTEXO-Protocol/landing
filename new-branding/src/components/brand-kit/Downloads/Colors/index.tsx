import { copyToClipboard } from "@/lib/common";
import Image from "next/image";
import "./index.scss";

interface BrandColor {
  title: string;
  color: string;
  theme: "light" | "dark";
}

const brandColors: BrandColor[] = [
  { title: "Concrete", color: "#DADADA", theme: "light" },
  { title: "Carbon", color: "#000000", theme: "dark" },
  { title: "Chalk", color: "#FFFFFF", theme: "light" },
  { title: "Moss", color: "#1F3114", theme: "dark" },
];

export const Colors = () => {
  return (
    <div className="brand-colors">
      {brandColors.map(({ title, color, theme }) => (
        <div key={color} className={`brand-colors__item brand-colors__item--${theme}`} style={{ backgroundColor: color }}>
          <span className="brand-colors__item-badge">{title}</span>

          <button className="brand-colors__item-copy" onClick={() => copyToClipboard(color)} aria-label={`Copy ${color}`}>
            <Image className="brand-colors__item-copy-icon" src="/common/copy.svg" alt="" width={16} height={16} />
            <span>{color}</span>
          </button>
        </div>
      ))}
    </div>
  );
};
