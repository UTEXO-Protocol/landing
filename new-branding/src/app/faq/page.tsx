import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { FAQWrapper } from "@/components/faq/Wrapper";

export const metadata: Metadata = {
  title: "FAQ - Utexo",
  description:
    "Frequently asked questions about Utexo, USDT payments on Bitcoin, Lightning Network integration, and stablecoin infrastructure.",
  alternates: { canonical: "https://utexo.com/faq" },
  openGraph: {
    title: "FAQ - Utexo",
    description:
      "Frequently asked questions about Utexo, USDT payments on Bitcoin, and stablecoin infrastructure.",
    url: "https://utexo.com/faq",
  },
  twitter: {
    title: "FAQ - Utexo",
    description:
      "Frequently asked questions about Utexo, USDT payments on Bitcoin, and stablecoin infrastructure.",
  },
};

const FAQ = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <InfoHero title="Frequently Asked Questions" />
        <FAQWrapper />
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
