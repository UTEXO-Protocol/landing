'use client';

import { useState } from 'react';

interface FAQData {
  question: string;
  answer: string;
  bullets?: string[];
}

export default function DevFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 4 items only (2 | 2), per the Dev design
  const leftFAQs: FAQData[] = [
    {
      question: 'What is Dev Utexo?',
      answer:
        "Dev Utexo is the SDK and REST API that connects your application to Utexo’s execution layer for private, instant RGB stablecoin transfers on Bitcoin. No nodes or infrastructure required.",
    },
    {
      question: 'Is Dev Utexo free?',
      answer:
        "Yes. Dev Utexo has no fees for integration or API access. You only pay the standard transaction fees applied to payments and swaps.",
    },
    {
      question: 'Is my data and funds secure?',
      answer:
        'Yes. DEV Utexo is fully non-custodial. Users control their keys and RGB state. Utexo cannot access funds or private transfer data.',
    },
  ];

  const rightFAQs: FAQData[] = [
    {
      question: 'Can I manage channels and monitor activity?',
      answer:
        'Yes. You can follow, close, and monitor Lightning channels and track channel activity in real time.',
    },
    {
      question: 'Can the platform scale with my business?',
      answer:
        'Yes. Utexo is built for high throughput and adapts to increased traffic through Lightning and state-channel aggregation.',
    },
  ];

  return (
    <section id="faqs" className="bg-black text-white px-4 sm:px-0">
      <div className="mx-auto w-full sm:w-[640px] md:w-11/12 pt-14 sm:pt-24 md:pt-36 relative border-b-[1px] border-l-0 sm:border-l-[1px] border-[#2A2A2A] border-r-0 sm:border-r-[1px] pb-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6">
          {/* Left Column - FAQS Label */}
          <div className="w-full sm:w-[120px] lg:w-[150px] shrink-0 pt-0 sm:pt-2 ml-0 sm:ml-6 lg:ml-[43px]">
            <span
              className="text-[14px] sm:text-[15px] lg:text-[16px] uppercase text-white font-ingram tracking-tight"
              style={{ letterSpacing: '-0.03em', lineHeight: '130%' }}
            >
              FAQS
            </span>
          </div>

          {/* Middle Column - Questions */}
          <div className="flex-1 space-y-3 sm:space-y-5 lg:space-y-6 ml-0 sm:ml-8 lg:ml-[64px]">
            {leftFAQs.map((faq, index) => (
              <div key={index} className="pr-0 sm:pr-12 lg:pr-[72px]">
                <h3
                  className="text-[18px] sm:text-[21px] mb-2 sm:mb-3 lg:mb-4 font-sans font-normal cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 mb-8 sm:mb-12 lg:mb-14">
                    {faq.answer && (
                      <div
                        className="text-[14px] sm:text-[15px] lg:text-[16px] text-white/50 leading-tight"
                        style={{ fontFamily: "'PP Mori', sans-serif" }}
                        dangerouslySetInnerHTML={{
                          __html: faq.answer.replace(/\n\n/g, '<br/><br/>'),
                        }}
                      />
                    )}
                    {faq.bullets && faq.bullets.length > 0 && (
                      <ul
                        className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] text-white/50"
                        style={{ fontFamily: "'PP Mori', sans-serif" }}
                      >
                        {faq.bullets.map((b, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: b.replace(/\n/g, '<br/>'),
                            }}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Questions */}
          <div className="flex-1 space-y-3 sm:space-y-5 lg:space-y-6">
            {rightFAQs.map((faq, idx) => {
              const rightIndex = idx + leftFAQs.length;
              return (
                <div key={rightIndex} className="pr-0 sm:pr-12 lg:pr-[72px]">
                  <h3
                    className="text-[18px] sm:text-[21px] mb-2 sm:mb-3 lg:mb-4 font-normal cursor-pointer hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "'PP Mori', sans-serif" }}
                    onClick={() =>
                      setOpenIndex(openIndex === rightIndex ? null : rightIndex)
                    }
                  >
                    {faq.question}
                  </h3>
                  {openIndex === rightIndex && (
                    <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 mb-8 sm:mb-12 lg:mb-[64px]">
                      {faq.answer && (
                        <div
                          className="text-[14px] sm:text-[15px] lg:text-[16px] text-white/50 leading-tight"
                          style={{ fontFamily: "'PP Mori', sans-serif" }}
                          dangerouslySetInnerHTML={{
                            __html: faq.answer.replace(/\n\n/g, '<br/><br/>'),
                          }}
                        />
                      )}
                      {faq.bullets && faq.bullets.length > 0 && (
                        <ul
                          className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] text-white/50"
                          style={{ fontFamily: "'PP Mori', sans-serif" }}
                        >
                          {faq.bullets.map((b, i) => (
                            <li
                              key={i}
                              dangerouslySetInnerHTML={{
                                __html: b.replace(/\n/g, '<br/>'),
                              }}
                            />
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
