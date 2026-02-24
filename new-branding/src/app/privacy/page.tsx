import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { PrivacyContent } from "@/components/Privacy/Content";
import { PrivacyMenu } from "@/components/Privacy/Menu";

const PrivacyPolicy = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <InfoHero title="Privacy Policy" />

        <PrivacyContent />

        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
