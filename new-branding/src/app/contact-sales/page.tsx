import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";
import { Contact } from "@/components/contact-sales/Contact";
import { ContactSalesHero } from "@/components/contact-sales/Hero";

export const metadata: Metadata = {
  alternates: { canonical: "https://utexo.com/contact-sales" },
};

const ContactSales = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">
        <ContactSalesHero />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ContactSales;
