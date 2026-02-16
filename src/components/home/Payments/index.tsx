import Image from "next/image";
import Link from "next/link";
import "./index.scss";

export interface PaymentProduct {
  title: string;
  icon: string;
  description: string;
  link: string;
  visual: React.ReactNode;
}

const products: PaymentProduct[] = [
  {
    title: "API",
    icon: "/payments/api.svg",
    description: "APIs to send, receive, and settle stablecoins with fixed costs and private execution.",
    link: "/api-product",
    visual: <Image src="/payments/code-image.svg" width={425} height={283} alt="API visualization" className="payments__visual-icon" />,
  },
  {
    title: "Cloud",
    icon: "/payments/cloud.svg",
    description: "Hands-off, managed infrastructure for stablecoin payments and trading, with yield on BTC and stablecoins.",
    link: "/cloud",
    visual: (
      <div className="payments__visual-currencies">
        <Image src="/payments/tether.svg" width={251} height={200} alt="Tether" />
        <Image src="/payments/bitcoin.svg" width={251} height={200} alt="Bitcoin" />
      </div>
    ),
  },
];

export const Payments = () => {
  return (
    <section className="payments">
      <div className="payments__header">
        <h2 className="payments__title">
          <span className="payments__title-accent">Scale your payments.</span> Secure your data
        </h2>
        <p className="payments__subtitle">
          Our products enable high-volume stablecoin payments and HFT with instant settlement, fixed execution costs, lightning-scale throughput, protocol-level privacy, and flexible deployment via
          API, Cloud, Bridge, and Swap.
        </p>
      </div>

      <div className="payments__grid">
        {products.map(product => (
          <article key={product.title} className="payments__product">
            <div className="payments__product-info">
              <div className="payments__product-icon">
                <Image src={product.icon} width={24} height={24} alt={product.title} />
              </div>
              <h3 className="payments__product-title">{product.title}</h3>
              <p className="payments__product-description">{product.description}</p>
              <Link href={product.link} className="payments__product-link">
                Explore
              </Link>
            </div>
            <div className="payments__product-visual">
              <Image src="/payments/grid.webp" width={500} height={400} alt="Grid background" className="payments__product-grid" />
              {product.visual}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
