import Image from "next/image";
import { Button } from "../CommonButton";
import { FooterNavigation } from "./Navigation";
import { FooterSocials } from "./Socials";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left-side">
          <div className="footer__left-side__info">
            <Image src="/footer/logo.png" alt="Utexo Logo" width={220} height={150} className="footer__logo-image" />
            <p className="footer__left-side__text">
              <span>Talk with sales.</span> Learn more about how Utexo can help your business.
            </p>
            <Button variant="white">Contact us</Button>
          </div>
          <FooterSocials />
        </div>
        <div className="footer__content">
          <FooterNavigation />
          <p className="footer__copyright">© Utexo 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
