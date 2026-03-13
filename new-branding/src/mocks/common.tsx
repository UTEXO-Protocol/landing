import Image from "next/image";

interface ProductCardLink {
  href: string;
  label: string;
  external?: boolean;
}

export type ProductCardType = {
  title: string;
  subtitle: string;
  description: string;
  icon: {
    src: string;
  };
  links: ProductCardLink[];
  visual: React.ReactNode;
};

export const apiProduct = {
  title: "API",
  subtitle: "Your gateway to USDT on Bitcoin.",
  description: "One API to move stablecoins with near-instant settlement, fixed costs, and private execution—built on Bitcoin.",
  icon: { src: "/payments/api.svg" },
  links: [
    { href: "https://docs.utexo.com/", label: "VIEW DOCS", external: true },
    { href: "/api-product", label: "EXPLORE API" },
  ],
  visual: <Image src="/payments/code-image.svg" width={425} height={283} alt="API visualization" className="products__visual-icon" />,
};

export const cloudProduct = {
  title: "Cloud",
  subtitle: "One-Click Lightning network infrastructure.",
  description: "Managed Lightning infrastructure for running stablecoin payments and trading at scale, with built-in yield and zero operational overhead.",
  icon: { src: "/payments/cloud.svg" },
  links: [
    {
      href: "https://docs.utexo.com/getting-started/editor/cloud",
      label: "VIEW DOCS",
      external: true,
    },
    { href: "/cloud", label: "EXPLORE CLOUD" },
  ],
  visual: (
    <div className="products__visual-currencies">
      <Image src="/payments/tether.svg" width={251} height={200} alt="Tether" />
      <Image src="/payments/bitcoin.svg" width={251} height={200} alt="Bitcoin" />
    </div>
  ),
};
