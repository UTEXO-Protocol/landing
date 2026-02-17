import Image from "next/image";
import "./index.scss";

interface FeatureItem {
  tag: string;
  icon: string;
  title: string;
  description: string;
}

const featuresList: FeatureItem[] = [
  {
    tag: "PRE-FIXED FEE",
    icon: "/home/features/dollar.svg",
    title: "Eliminate fee spikes",
    description: "Set fees upfront and regain control over your margins. Transaction costs remain constant regardless of network activity.",
  },
  {
    tag: "UNLIMITED SCALABILITY",
    icon: "/home/features/rocket.svg",
    title: "Real-time, not block-time",
    description: "Transactions execute off-chain with instant confirmation, meeting modern payment and high-frequency demands.",
  },
  {
    tag: "INSTANT SETTLEMENTS",
    icon: "/home/features/layers.svg",
    title: "Scale without surprise",
    description: "Never slow down with higher volume — speed stays constant at 1x or 100x.",
  },
  {
    tag: "EMBEDDED CONFIDENTIALITY",
    icon: "/home/features/lock.svg",
    title: "Private, but compliant",
    description: "No on-chain evidence of transfers while staying complaint with AML rules.",
  },
];

export const Features = () => {
  return (
    <section className="features">
      <h2 className="features__title">
        <span className="features__title-accent">Built for how digital</span> money moves
      </h2>

      <div className="features__grid">
        {featuresList.map(feature => (
          <article key={feature.title} className="features__card">
            <div className="features__card-tag">{feature.tag}</div>

            <div className="features__card-body">
              <div className="features__card-header">
                <div className="features__card-icon">
                  <Image src={feature.icon} alt="" width={24} height={24} />
                </div>
                <h3 className="features__card-title">{feature.title}</h3>
              </div>
              <p className="features__card-description">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
