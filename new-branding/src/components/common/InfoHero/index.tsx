"use client";

import "./index.scss";

export const InfoHero: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="info-hero">
      <h1 className="info-hero__title">{title}</h1>
    </section>
  );
};
