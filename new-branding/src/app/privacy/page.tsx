import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { LegalContent } from "@/components/common/Legal/Content";

export const metadata: Metadata = {
  alternates: { canonical: "https://utexo.com/privacy" },
};

const PrivacyPolicy = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <InfoHero title="Privacy Policy" />
        <LegalContent fileName="privacy-policy.mdx" />
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
