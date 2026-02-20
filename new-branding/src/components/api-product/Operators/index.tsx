import { operators } from "@/mocks/api-product";
import "./index.scss";

export const Operators = () => {
  return (
    <section className="operators">
      <h2 className="operators__title">
        <span className="operators__title-accent">Designed for operators</span>
        that move value at scale.
      </h2>

      <div className="operators__grid">
        {operators.map(operator => (
          <article key={operator.title} className="operators__card">
            <span className="operators__card-index">{operator.index}</span>
            <div className="operators__card-bottom">
              <h3 className="operators__card-title">{operator.title}</h3>
              <p className="operators__card-description">{operator.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
