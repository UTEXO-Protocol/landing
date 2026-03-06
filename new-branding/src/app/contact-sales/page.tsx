import { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";
import { Contact } from "@/components/contact-sales/Contact";
import { ContactSalesHero } from "@/components/contact-sales/Hero";

export const metadata: Metadata = {
  title: "Contact Sales - Utexo",
  description:
    "Talk to our sales experts about USDT payments on Bitcoin. Get a personalized walkthrough and custom pricing for your business.",
  alternates: { canonical: "https://utexo.com/contact-sales" },
  openGraph: {
    title: "Contact Sales - Utexo",
    description:
      "Talk to our sales experts about USDT payments on Bitcoin. Get a personalized walkthrough and custom pricing.",
    url: "https://utexo.com/contact-sales",
  },
  twitter: {
    title: "Contact Sales - Utexo",
    description:
      "Talk to our sales experts about USDT payments on Bitcoin. Get a personalized walkthrough and custom pricing.",
  },
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
