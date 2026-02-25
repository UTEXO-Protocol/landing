import Image from "next/image";
import "./index.scss";
import { ExpandIcon } from "@/app/static/images";

interface BrandFont {
  id: string;
  label: string;
  type: string;
  weights: string;
  fontFamily: string;
  href: string;
}

const brandFonts: BrandFont[] = [
  {
    id: "pp-mori",
    label: "PP MORI",
    type: "Primary font",
    weights: "Regular, Medium, Semibold",
    fontFamily: "PP Mori",
    href: "",
  },
  {
    id: "geist-mono",
    label: "GEIST MONO",
    type: "Secondary font",
    weights: "Regular, Medium, Semibold",
    fontFamily: "Geist Mono",
    href: "https://fonts.google.com/specimen/Geist+Mono?query=geist+mono",
  },
];

export const Fonts = () => {
  return (
    <div className="brand-fonts">
      {brandFonts.map(({ id, label, type, weights, fontFamily, href }) => (
        <div key={id} className="brand-fonts__item">
          <div className="brand-fonts__item-header">
            <span className="brand-fonts__item-label">{label}</span>
            <a className="brand-fonts__item-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label}`}>
              <ExpandIcon className="brand-fonts__item-icon" aria-hidden="true" />
            </a>
          </div>

          <div className="brand-fonts__item-footer">
            <p className="brand-fonts__item-type">{type}</p>
            <p className="brand-fonts__item-weights">{weights}</p>
            <p className={`brand-fonts__item-specimen brand-fonts__item-specimen--${id}`}>{fontFamily}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
