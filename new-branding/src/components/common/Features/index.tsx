import Image from "next/image";
import "./index.scss";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const Features: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <div className="features">
      {features.map(feature => (
        <article key={feature.title} className="features__card">
          <div className="features__card-icon">
            <Image src={feature.icon} alt={feature.title} width={27} height={27} className="features__card-icon-img" />
          </div>
          <div className="features__card-text">
            <h3 className="features__card-title">{feature.title}</h3>
            <p className="features__card-description">{feature.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
