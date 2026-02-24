"use client";

import { useState } from "react";
import "./index.scss";
import { FAQs } from "@/mocks/faq";
import { FAQItem } from "../FaqItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faq">
      {FAQs.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} openIndex={openIndex} onToggle={handleToggle} />
      ))}
    </section>
  );
}
