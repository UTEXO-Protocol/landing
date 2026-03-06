import { Features } from "@/components/common/Features";
import { pspFeatures } from "@/mocks/psp";

import "./index.scss";

export const PspFeatures = () => {
  return (
    <section className="psp-features">
      <Features features={pspFeatures} />
    </section>
  );
};
