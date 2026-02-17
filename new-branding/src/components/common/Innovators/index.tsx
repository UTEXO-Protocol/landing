import Image from "next/image";
import { testimonials } from "@/mocks/api-product";
import "./index.scss";

export const Innovators = () => {
  return (
    <section className="innovators">
      <div className="innovators__wrapper">

      <div className="innovators__green-block" />

      <h2 className="innovators__title">
        <span className="innovators__title-accent">Innovators </span>
        building on Utexo.
      </h2>

      <div className="innovators__cards">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className={`innovators__card innovators__card--${t.variant}`}
          >
            <div className="innovators__card-quote">
              <span className="innovators__card-quote-mark">&ldquo;</span>
              <span className="innovators__card-quote-bold">{t.quoteBold}</span>
              <span className="innovators__card-quote-rest">{t.quoteRest}</span>
            </div>
            <div className="innovators__card-author">
              <Image
                src={t.logo}
                alt={t.company}
                width={44}
                height={44}
                className="innovators__card-logo"
              />
              <div className="innovators__card-author-info">
                <span className="innovators__card-author-name">{t.author}</span>
                <span className="innovators__card-author-company">{t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
