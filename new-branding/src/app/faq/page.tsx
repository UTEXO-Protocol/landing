import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { InfoHero } from "@/components/common/InfoHero";
import Navigation from "@/components/common/Navigation";
import { FAQWrapper } from "@/components/faq/Wrapper";

export const metadata: Metadata = {
  alternates: { canonical: "https://utexo.com/faq" },
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
