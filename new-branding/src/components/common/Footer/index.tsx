"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../CommonButton";
import { FooterNavigation } from "./Navigation";
import { FooterSocials } from "./Socials";
import "./index.scss";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const contactSales = () => {
    router.push("contact-sales");
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left-side">
          <div className="footer__left-side__info">
            <Image src="/footer/logo.png" alt="Utexo Logo" width={220} height={150} className="footer__logo-image" />
            <p className="footer__left-side__text">
              <span>Talk with sales.</span> Learn more about how Utexo can help your business.
            </p>
            <Button variant="white" onClick={contactSales}>
              Contact us
            </Button>
          </div>
          <div className="footer__socials--desktop">
            <FooterSocials />
          </div>
        </div>
        <div className="footer__content">
          <FooterNavigation />
          <div className="footer__wrapper">
            <div className="footer__socials--mobile">
              <FooterSocials />
            </div>
            <p className="footer__copyright" suppressHydrationWarning>
              © Utexo {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
