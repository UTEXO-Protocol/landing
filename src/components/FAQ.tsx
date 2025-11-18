'use client';
import Image from "next/image";
import { useState } from "react";

interface FAQData {
  question: string;
  answer: string;
  bullets?: string[];
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftFAQs: FAQData[] = [
    {
      question: "What is Utexo?",
      answer: "Utexo is a Bitcoin execution layer for Lightning-scale stablecoin payments, securing USDT with Bitcoin's proof-of-work and RGB's privacy/programmability. It prioritizes stablecoins for non-custodial DeFi without blockchain bloat.",
      bullets: ["Unlocks $300B+ stablecoin liquidity for BTCFi", "Enables native yield opportunities for Bitcoin and USDT"]
    },
    {
      question: "How do I bridge USDT into Utexo?",
      answer: "Connect your wallets, select route, and atomic-swap to RGB with Utexo USDT in <60 seconds—non-custodial, cheap, instant.",
      bullets: ["Steps: Approve > Select amount/chain > Confirm > Receive.", "Chains: Tron in Q4, Ethereum already live"]
    },
    {
      question: "How are transfers instant with zero fees?",
      answer: "Sub second finality via Lightning integration, zero settlement fee since that is managed inside Utexo's execution layer on Bitcoin. RGB client-side validation ensures full privacy.",
      bullets: ["Payment channels abstracted for smooth user UX, enabling off-chain, instant, cheap, private transactions", "Atomic swaps with liquidity providers and LSPs enable global routing", "Impact:  built to handle billions in daily USDT volume moving through Bitcoin"]
    },
    {
      question: "How does privacy work via RGB?",
      answer: "RGB uses client-side validation with blinded state commitments on Bitcoin UTXOs. There is no public graph.",
      bullets: ["Commitments only on-chain; balances/recipients off-ledger", "Blended invoice allows to hide receiver UTXO from the sender", "Value: Secure institutional USDT flows"]
    },
    {
      question: "How do I stake / earn yield?",
      answer: "Deposit BTC/USDT on utexo.com for APY from Lightning routing fees/incentives (up to 15% est.), auto-compounding via Bitcoin-secured exits—non-custodial.",
      bullets: ["Steps: Bridge > LP in pairs (e.g., USDT/BTC) > Earn fees + rewards.", "Sources: Routing fees, exchange/tx activity, and future incentives"]
    },
    {
      question: "Are funds SAFU? What are the risks?",
      answer: "",
      bullets: ["Insured liquidity; AML compliant"]
    },
    {
      question: "When will Utexo launch?",
      answer: "Bridge is live now. Full launch of Utexo with AMM Dex, developer platform (api) in Q1/Q2 2026.",
      bullets: ["Current: Bridge is active ; Q4 AMM/yield; Q1 2026 scaling/ orderbook", "2026: AMM, API, scaling", "Access: inquire at help@utexo.com"]
    }
  ];

  const rightFAQs: FAQData[] = [
    {
      question: "What is RGB, and why pair it with Lightning?",
      answer: "RGB is a client-side validation protocol for private, programmable assets on Bitcoin. Utexo pairs RGB with Lightning to leverage Lightning speed while keeping asset logic off-chain. In practice, the Utexo execution layer sits between users and a network of professional LSPs and service providers. It abstracts Lightning channel management, RGB issuance, and rebalancing challenges so users get a simple stablecoin experience on Bitcoin without giving up custody.",
      bullets: ["Enhances privacy and settlement speed"]
    },
    {
      question: "What stablecoins does Utexo support?",
      answer: "Launches with USDT ($180B liquidity); others will follow (USDC, USDA, DAI, USDI). Atomic swaps ensure 1:1 parity. Utexo serves as Bitcoin's stablecoin gateway.",
      bullets: []
    },
    {
      question: "Is Utexo fully non-custodial?",
      answer: "Yes, users control keys and RGB state. Client-side validation ensures no transaction history published on-chain.",
      bullets: []
    },
    {
      question: "Why Utexo over LSPs or other Lightning solutions?",
      answer: "Lightning channel management today is handled by Lightning Service Providers (LSPs). Utexo adds an execution layer on Bitcoin that coordinates with LSPs, abstracts inbound and outbound liquidity, and improves UX. It brings Lightning, RGB, and Bitcoin-native UTXO transport solutions such as statechains into a single environment that is built for stablecoin flows.",
      bullets: ["RGB privacy + Bitcoin security outpaces alternatives"]
    },
    {
      question: "What are the actual fees in Utexo?",
      answer: "Fees come from using Utexo services, for example swaps, routing payments, and other transactional flows inside our execution layer. Settlements in Utexo are zero fee. Because most activity happens off-chain over Lightning and RGB, effective costs are lower and transactions faster than typical stablecoin transfers on other networks.",
      bullets: ["Fee structure optimized for efficiency vs. Ethereum"]
    },
    {
      question: "How scalable is Utexo for BTCFi growth?",
      answer: "Utexo is a Bitcoin execution layer for Lightning-scale stablecoin payments, securing USDT with Bitcoin's proof-of-work and RGB's privacy/programmability. It prioritizes stablecoins for non-custodial DeFi without blockchain bloat.",
      bullets: ["Unlocks $300B+ stablecoin liquidity for BTCFi", "Enables native yield opportunities for Bitcoin and USDT"]
    },
    {
      question: "Can I integrate Utexo into my wallet or app?",
      answer: "Yes, SDKs/APIs are available on dev.utexo.com for bridging/ swaps/proofs with Utexo. Compatible with any wallet or app supporting atomic swaps and client-side validation.",
      bullets: ["Testnet/docs available soon", "Partnership inquiries welcome help@utexo.com"]
    }
  ];

  return (
    <section id="faqs" className="bg-[#D4D4D4] px-4 sm:px-0 ">
      <div className="w-full sm:w-[640px] md:w-11/12 pt-14 sm:pt-24 md:pt-36 mx-auto relative border-l-0 sm:border-l-[1px] border-[#C6C6C6] border-r-0 sm:border-r-[1px] border-[#C6C6C6] pb-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6">
          {/* Left Column - FAQS Label */}
          <div className="w-full sm:w-[120px] lg:w-[150px] shrink-0 pt-0 sm:pt-2 ml-0 sm:ml-6 lg:ml-[43px]">
            <span className="text-[14px] sm:text-[15px] lg:text-[16px] uppercase text-black font-ingram tracking-tight">FAQS</span>
          </div>

          {/* Middle Column - Questions */}
          <div className="flex-1 space-y-3 sm:space-y-5 lg:space-y-6 ml-0 sm:ml-8 lg:ml-[64px]">
            {leftFAQs.map((faq, index) => (
              <div key={index} className="pr-0 sm:pr-12 lg:pr-[72px]">
                <h3 
                  className="text-[18px] sm:text-[21px] mb-2 sm:mb-3 lg:mb-4 font-sans font-normal cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 mb-8 sm:mb-12 lg:mb-14">
                    {faq.answer && (
                      <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight">
                        {faq.answer}
                      </p>
                    )}
                    {faq.bullets && faq.bullets.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                        {faq.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
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
            {rightFAQs.map((faq, index) => {
              const rightIndex = index + leftFAQs.length;
              return (
                <div key={rightIndex} className="pr-0 sm:pr-12 lg:pr-[72px]">
                  <h3 
                    className="text-[18px] sm:text-[21px] mb-2 sm:mb-3 lg:mb-4 font-normal cursor-pointer hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "'PP Mori', sans-serif" }}
                    onClick={() => setOpenIndex(openIndex === rightIndex ? null : rightIndex)}
                  >
                    {faq.question}
                  </h3>
                  {openIndex === rightIndex && (
                    <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 mb-8 sm:mb-12 lg:mb-[64px]">
                      {faq.answer && (
                        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                          {faq.answer}
                        </p>
                      )}
                      {faq.bullets && faq.bullets.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                          {faq.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
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

