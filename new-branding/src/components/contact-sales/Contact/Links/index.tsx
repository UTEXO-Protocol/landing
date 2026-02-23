import Link from "next/link";
import Image from "next/image";
import { ExpandIcon } from "@/app/static/images";
import { contactLinks } from "@/mocks/contact";
import "./index.scss";

export const ContactLinks = () => {
  return (
    <ul className="contact-links">
      {contactLinks.map(item => (
        <li key={item.title}>
          <Link href={item.href} className="contact-links__link" target="_blank" rel="noopener noreferrer">
            <div className="contact-links__icon-box">
              <Image src={item.icon} alt={item.alt} width={24} height={24} />
            </div>

            <div className="contact-links__content">
              <span className="contact-links__title">{item.title}</span>
              <span className="contact-links__subtitle">{item.subtitle}</span>
            </div>

            <ExpandIcon className="contact-links__arrow" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
