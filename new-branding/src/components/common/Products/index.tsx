import Image from "next/image";
import Link from "next/link";
import "./index.scss";

export const Products = () => {
  return (
    <section className="psp-products">
      <span className="psp-products__badge">SETTLE VALUE INSTANTLY ON BITCOIN</span>

      <h2 className="psp-products__title">
        Products that power
        <br />
        your business
      </h2>

      <div className="psp-products__card">
        <div className="psp-products__card__info">
          <div className="psp-products__card__top">
            <div className="psp-products__card__icon">
              <Image src="/psp/api-icon.svg" alt="" width={48} height={48} />
            </div>
            <div className="psp-products__card__content">
              <h3 className="psp-products__card__title">API</h3>
              <p className="psp-products__card__subtitle">Your gateway to USDT on Bitcoin.</p>
              <p className="psp-products__card__description">One API to move stablecoins with near-instant settlement, fixed costs, and private execution—built on Bitcoin.</p>
            </div>
          </div>
          <div className="psp-products__card__links">
            <Link href="/api-product" className="psp-products__card__link">
              VIEW DOCS
              <Image src="/common/arrow-link.svg" alt="" width={16} height={16} />
            </Link>
            <Link href="/api-product" className="psp-products__card__link">
              EXPLORE API
            </Link>
          </div>
        </div>
        <div className="psp-products__card__visual">
          <Image src="/payments/grid.webp" width={500} height={400} alt="" className="psp-products__card__grid" />
          <Image src="/payments/code-image.svg" width={425} height={283} alt="API visualization" className="psp-products__card__image" />
        </div>
      </div>
    </section>
  );
};
