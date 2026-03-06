import { ContactForm } from "./Form";
import { ContactLinks } from "./Links";
import "./index.scss";

export const Contact = () => {
  return (
    <section className="contact-us">
      <div className="contact-us__left">
        <p className="contact-us__badge">contact us</p>
        <div className="contact-us__info">
          <h2 className="contact-us__title">Talk to an expert.</h2>
          <p className="contact-us__description">Let&apos;s talk about your goals. Contact our sales experts for a personalized walkthrough and custom pricing tailored to your needs.</p>
        </div>
        <div className="contact-us__links">
          <ContactLinks />
        </div>
      </div>
      <ContactForm />
      <div className="contact-us__decoration" aria-hidden="true" />
      <div className="contact-us__bottom-decorator" aria-hidden="true" />
    </section>
  );
};
