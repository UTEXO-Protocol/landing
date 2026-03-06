import Image from "next/image";
import "./index.scss";

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
    id: "geist",
    label: "Geist",
    type: "Primary font",
    weights: "Regular, Medium, Semibold",
    fontFamily: "Geist",
    href: "https://fonts.google.com/specimen/Geist",
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
              <Image src="/common/linkVector.svg" className="brand-fonts__item-icon" alt="expand icon" aria-hidden="true" width={20} height={20} />
              <span className="sr-only">(opens in a new tab)</span>
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
