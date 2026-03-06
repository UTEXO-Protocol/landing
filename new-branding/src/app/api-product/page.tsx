import { Metadata } from "next";
import Navigation from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { TrustedBy } from "@/components/common/TrustedBy";
import { ApiHero } from "@/components/api-product/Hero";
import { Infrastructure } from "@/components/api-product/Infrastructure";
import { ApiFeatures } from "@/components/api-product/ApiFeatures";
import { Operators } from "@/components/api-product/Operators";

export const metadata: Metadata = {
  title: "Utexo API - Your Gateway to Native USDT on Bitcoin",
  description:
    "One API to move USDT instantly with configurable costs and confidential execution. Powered by Lightning and RGB.",
  alternates: { canonical: "https://utexo.com/api-product" },
  openGraph: {
    title: "Utexo API - Your Gateway to Native USDT on Bitcoin",
    description:
      "One API to move USDT instantly with configurable costs and confidential execution. Powered by Lightning and RGB.",
    url: "https://utexo.com/api-product",
  },
  twitter: {
    title: "Utexo API - Your Gateway to Native USDT on Bitcoin",
    description:
      "One API to move USDT instantly with configurable costs and confidential execution. Powered by Lightning and RGB.",
  },
};

export default function ApiProduct() {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <ApiHero />
        <TrustedBy />
        <Infrastructure />
        <ApiFeatures />
        <Operators />
        {/* <Innovators /> */}
        <Footer />
      </div>
    </div>
  );
}
