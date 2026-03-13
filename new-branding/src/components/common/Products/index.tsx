"use client";

import { ProductCard } from "./Card";
import { ProductCardType } from "@/mocks/common";
import "./index.scss";

export const Products: React.FC<{ products: ProductCardType[] }> = ({ products }) => {
  return (
    <section className="products">
      <span className="products__badge">SETTLE VALUE INSTANTLY ON BITCOIN</span>

      <h2 className="products__title">
        Products that power
        <br />
        your business
      </h2>
      <div className="products__content">
        {products.map(product => (
          <ProductCard key={product.title} title={product.title} subtitle={product.subtitle} description={product.description} icon={product.icon} links={product.links} visual={product.visual} />
        ))}
      </div>
    </section>
  );
};
