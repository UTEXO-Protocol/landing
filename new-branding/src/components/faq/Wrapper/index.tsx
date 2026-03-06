import FAQ from "../Content";
import { FAQSupport } from "../Support";
import "./index.scss";

export const FAQWrapper = () => {
  return (
    <div className="faq-wrapper">
      <FAQSupport />
      <FAQ />
    </div>
  );
};
