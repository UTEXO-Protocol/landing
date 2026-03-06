import { Metadata } from "next";

import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { CloudHero } from "@/components/cloud/Hero";
import { Overview } from "@/components/cloud/Overview";
import { CloudFeatures } from "@/components/cloud/CloudFeatures";
export const metadata: Metadata = {
  title: "Utexo Cloud - One-Click Lightning Network Infrastructure",
  description:
    "Fully managed Lightning Network infrastructure for native USDT settlement and enterprise-grade yield. Deploy without managing nodes.",
  alternates: { canonical: "https://utexo.com/cloud" },
  openGraph: {
    title: "Utexo Cloud - One-Click Lightning Network Infrastructure",
    description:
      "Fully managed Lightning Network infrastructure for native USDT settlement and enterprise-grade yield.",
    url: "https://utexo.com/cloud",
  },
  twitter: {
    title: "Utexo Cloud - One-Click Lightning Network Infrastructure",
    description:
      "Fully managed Lightning Network infrastructure for native USDT settlement and enterprise-grade yield.",
  },
};

export default function Cloud() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <CloudHero />
        <TrustedBy />
        <Overview />
        <CloudFeatures />
        {/* <Innovators /> */}
        <Footer />
      </div>
    </div>
  );
}
