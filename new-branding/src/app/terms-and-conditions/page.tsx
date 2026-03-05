import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { LegalContent } from "@/components/common/Legal/Content";

export const metadata: Metadata = {
  alternates: { canonical: "https://utexo.com/terms-and-conditions" },
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
