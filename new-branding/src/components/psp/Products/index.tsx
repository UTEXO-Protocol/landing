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
        <div className="psp-products__card-info">
          <div className="psp-products__card-top">
            <div className="psp-products__card-icon">
              <Image
                src="/psp/api-icon.svg"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <div className="psp-products__card-content">
              <h3 className="psp-products__card-title">API</h3>
              <p className="psp-products__card-subtitle">
                Your gateway to USDT on Bitcoin.
              </p>
              <p className="psp-products__card-description">
                One API to move stablecoins with near-instant settlement, fixed
                costs, and private execution—built on Bitcoin.
              </p>
            </div>
          </div>
          <div className="psp-products__card-links">
            <Link href="/api-product" className="psp-products__link">
              VIEW DOCS
              <Image
                src="/common/arrow-link.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
            <Link href="/api-product" className="psp-products__link">
              EXPLORE API
            </Link>
          </div>
        </div>

        <div className="psp-products__card-visual">
          <Image
            src="/psp/grid-bg.png"
            alt=""
            width={662}
            height={464}
            className="psp-products__grid-bg"
          />
          
        </div>
      </div>
    </section>
  );
};
