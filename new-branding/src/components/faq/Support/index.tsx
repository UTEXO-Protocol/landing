import { Button } from "@/components/common/CommonButton";

import "./index.scss";

export const FAQSupport = () => {
  return (
    <div className="faq-support">
      <p className="faq-support__badge">Contact us</p>

      <p className="faq-support__title">Can't find what you're looking for?</p>

      <a className="faq-support__email" href="mailto:info@utexo.com">
        info@utexo.com
      </a>

      <Button variant="black" size="full" href="https://docs.utexo.com/">
        Go to documentation <span className="sr-only">(opens in a new tab)</span>
      </Button>
    </div>
  );
};
