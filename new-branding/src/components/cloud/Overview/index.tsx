import Image from "next/image";
import { cloudOverviewFeatures } from "@/mocks/cloud";
import "./index.scss";

export const Overview = () => {
  return (
    <section className="cloud-overview">
      <div className="cloud-overview__inner">
        <p className="cloud-overview__text">
          <span>Utexo cloud offers managed execution infrastructure for applications</span> that require direct control over node-level components.
        </p>

        <ul className="cloud-overview__features">
          {cloudOverviewFeatures.map(feature => (
            <li key={feature.text} className="cloud-overview__feature">
              <Image src={feature.icon} alt="" width={24} height={24} className="cloud-overview__feature-icon" />
              <span className="cloud-overview__feature-text">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
