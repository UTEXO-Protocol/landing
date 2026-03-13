import Image from "next/image";
import Link from "next/link";
import { ProductCardType } from "@/mocks/common";
import "./index.scss";

export function ProductCard({ title, subtitle, description, icon, links, visual }: ProductCardType) {
  return (
    <div className="products-card">
      <div className="products-card__info">
        <div className="products-card__top">
          <div className="products-card__icon">
            <Image src={icon.src} alt="" width={24} height={24} />
          </div>
          <div className="products-card__content">
            <h3 className="products-card__title">{title}</h3>
            <p className="products-card__subtitle">{subtitle}</p>
            <p className="products-card__description">{description}</p>
          </div>
        </div>

        <div className="products-card__links">
          {links.map(link =>
            link.external ? (
              <Link key={link.href} href={link.href} target="_blank" className="products-card__link">
                {link.label}
                <span className="sr-only">(opens in a new tab)</span>
                <Image src="/common/arrow-link.svg" alt="" width={16} height={16} />
              </Link>
            ) : (
              <Link key={link.href} href={link.href} className="products-card__link">
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="products-card__visual">
        <Image src="/payments/grid.webp" width={500} height={400} alt="" className="products-card__grid" />
        <div>{visual}</div>
      </div>
    </div>
  );
}
