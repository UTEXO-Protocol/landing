"use client";

import Image from "next/image";
import "./index.scss";

export interface FAQData {
  question: string;
  answer: string;
  bullets?: string[];
}

interface FAQItemProps {
  faq: FAQData;
  index: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
}

export const FAQItem = ({ faq, index, openIndex, onToggle }: FAQItemProps) => {
  const isOpen = openIndex === index;

  return (
    <div className="faq-item">
      <div className="faq-item__question" onClick={() => onToggle(index)}>
        <span className="faq-item__question-text">{faq.question}</span>
        <Image src={isOpen ? "/common/minus.svg" : "/common/plus.svg"} alt={isOpen ? "collapse" : "expand"} width={24} height={24} />
      </div>

      {isOpen && (
        <div className="faq-item__answer-wrapper">
          {faq.answer && (
            <div
              className="faq-item__answer"
              dangerouslySetInnerHTML={{
                __html: faq.answer.replace(/\n\n/g, "<br/><br/>").replace(/\n/g, "<br/>"),
              }}
            />
          )}

          {faq.bullets && faq.bullets.length > 0 && (
            <ul className="faq-item__bullets">
              {faq.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="faq-item__bullet"
                  dangerouslySetInnerHTML={{
                    __html: bullet.replace(/\n/g, "<br/>"),
                  }}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
