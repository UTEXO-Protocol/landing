import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { LegalContent } from "@/components/common/Legal/Content";

export const metadata: Metadata = {
  title: "Terms and Conditions - Utexo",
  description:
    "Read the Utexo terms and conditions. Understand the rules and guidelines for using Utexo products and services.",
  alternates: { canonical: "https://utexo.com/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions - Utexo",
    description:
      "Read the Utexo terms and conditions for using Utexo products and services.",
    url: "https://utexo.com/terms-and-conditions",
  },
};

const TermsAndConditions = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <InfoHero title="Terms And Conditions" />
        <LegalContent fileName="terms-and-conditions.mdx" />
        <Footer />
      </div>
    </div>
  );
};

export default TermsAndConditions;
