"use client";

import { Feature, Features } from "@/components/common/Features";

import "./index.scss";

export const FeaturesWrapper: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <section className="features-wrapper">
      <Features features={features} />
    </section>
  );
};
