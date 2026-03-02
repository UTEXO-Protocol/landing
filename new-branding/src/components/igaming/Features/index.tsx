import { Features } from "@/components/common/Features";
import { igamingFeatures } from "@/mocks/igaming";

import "./index.scss";

export const IgamingFeatures = () => {
  return (
    <section className="igaming-features">
      <Features features={igamingFeatures} />
    </section>
  );
};
