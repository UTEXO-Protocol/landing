import Image from "next/image";
import "./index.scss";

export const BrandKitHero = () => {
  return (
    <div className="brand-kit-hero">
      <div className="brand-kit-hero__info">
        <h1 className="brand-kit-hero__title">Brand Kit</h1>
        <p className="brand-kit-hero__text">Resources to help present the Utexo brand clearly and professionally.</p>
      </div>
      <Image src="/brand-kit/hero-image.svg" alt="Utexo brand assets preview" height={477} width={477} className="brand-kit-hero__image" />
      <div className="brand-kit-hero__decoration" />
    </div>
  );
};
