import { operatorsList } from "@/mocks/api-product";
import "./index.scss";

export const Operators = () => {
  return (
    <section className="operators">
      <h2 className="operators__title">
        <span className="operators__title-accent">Best-in-class stablecoin</span> settlement infrastructure
      </h2>

      <div className="operators__grid">
        {operatorsList.map(item => (
          <article key={item.title} className="operators__card">
            <div className="operators__card-header">
              <div className="operators__card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="operators__card-title">{item.title}</h3>
            </div>
            <p className="operators__card-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
