import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { LegalContent } from "@/components/Legal/Content";

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
