'use client';
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
      answer: "Utexo is a Bitcoin-native execution layer that brings stablecoin payments and settlement natively to Bitcoin using Lightning and RGB.\n\nIt combines Bitcoin’s security, Lightning’s speed, and RGB’s privacy and programmability to deliver instant, non-custodial USDT transfers on Bitcoin.\n\nUtexo abstracts the complexity of channels, routing, and RGB state handling, providing a single interface for stablecoin transfers, liquidity provisioning, and developer integration.",
      bullets: ["Unlocks $300B+ stablecoin liquidity for BTCFi", "Enables native yield opportunities for Bitcoin and USDT"]
    },
    {
      question: "How do I bridge USDT into Utexo?",
      answer: "Connect your wallets, select route, and atomic-swap to RGB with Utexo USDT in <60 seconds.\n\nTransfers are fully non-custodial, with sub-second finality and near zero fees.",
      bullets: ["The flow is simple:\nApprove > Select amount & chain > Confirm > Receive.", "Chains:\nIt currently supports Ethereum, while Tron is scheduled for Q1 2026.", "<a href='https://bridge.utexo.com' class='link underline hover:no-underline transition-all duration-150 ' target='_blank' rel='noopener noreferrer'>Try it now!</a>"]
    },
    {
      question: "How are transfers instant with zero fees?",
      answer: "Utexo routes payments through Lightning’s channels, while RGB's client-side validation ensures full privacy.\n\nThe hard logic is kept off-chain: since transfers don’t touch Bitcoin blockspace and RGB doesn’t rely on any global ledger, there’s no on-chain fee per transaction.\n\nCosts are limited to the routing micro-fees (0.1%-0.3%) charged by the chosen Lightning channel.",
      bullets: ["Payment channels abstracted for user UX, enabling off-chain, instant, cheap, private txs.", "Atomic swaps with LSPs for global routing", "Impact: Handles $1B+ USDT daily"]
    },
    {
      question: "How does privacy work via RGB?",
      answer: "RGB uses client-side validation with blinded state commitments on Bitcoin UTXOs.\n\nOnly the parties involved in a transfer see the details. Observers only see ordinary Bitcoin transactions with embedded commitments, indistinguishable from other taproot/tapret data.\n\nThis makes transfers private by default while still anchored to Bitcoin for ordering and double-spend protection.",
      bullets: ["Ownership proofs stay with the user", "State transitions are exchanged privately between peers", "Bitcoin records only compact commitments, not transaction data", "There is no mempool or global ledger of RGB activity", "Value: Secure institutional USDT flows"]
    },
    {
      question: "How do I stake / earn yield?",
      answer: "Users can provide liquidity (BTC/USDT) to Utexo’s channels and AMM, auto-compounding via non-custodial Bitcoin-secured exits.\n\nYield comes from real transaction activity:\nLightning routing fees, swap spreads, and incentives tied to the network’s stablecoin flows. We estimate a potential annual yield of 8-15% for LPs.\n\n<strong>Important:</strong><br />No fixed APY is guaranteed. Returns depend entirely on network volume and liquidity usage.",
      bullets: []
    },
    {
      question: "Are funds SAFU? What are the risks?",
      answer: "Users keep custody of their keys and RGB state.\n\nUtexo does not custody user funds, does not hold balances on behalf of users, and cannot access private transfer data.",
      bullets: ["Insured liquidity; AML compliant"]
    },
    {
      question: "When will Utexo launch?",
      answer: `
        Utexo is rolling out in phases:<br/><br/>
        <ul class='list-disc list-inside space-y-2'>
          <li>USDT–RGB Bridge: <strong>live</strong></li>
          <li>Liquidity layer (AMM, yield): <strong>Q4 2025</strong></li>
          <li>Execution layer (Lightning + RGB state channels): <strong>Q1 2026</strong></li>
          <li>Developer platform (API/SDK): <strong>Q1 2026</strong></li>
        </ul>
        <br/>
        This sequencing matches the technical dependencies: liquidity first, then high-throughput settlement.
      `,      
      bullets: []
    }
  ];

  const rightFAQs: FAQData[] = [
    {
      question: "What is RGB, and why pair it with Lightning?",
      answer: "RGB is a client-side validation protocol for private, programmable assets on Bitcoin. Utexo pairs RGB with Lightning to enhance scalability while keeping asset logic off-chain.\n\nTogether, they create a settlement model where stablecoins move instantly, privately, and without global state updates, all secured by Bitcoin’s base layer commitments.\n\nThe Utexo execution layer sits between users and a network of professional LSPs, abstracting Lightning’s channel management, RGB issuance, and rebalancing challenges so users get a simple stablecoin experience on Bitcoin without giving up custody.",
      bullets: ["Enhances privacy and settlement speed"]
    },
    {
      question: "What stablecoins does Utexo support?",
      answer: "Utexo launches with USDT on RGB.<br />Other stablecoins that support 1:1 atomic swaps (USDC, USD1, USDA, DAI) will be integrated in later stages.\n\nRGB allows these assets to exist natively inside Bitcoin’s UTXO model, without wrapping.",
      bullets: []
    },
    {
      question: "Is Utexo fully non-custodial?",
      answer: "Yes, users control keys and RGB state, while client-side validation ensures no transaction history published on-chain.",
      bullets: []
    },
    {
      question: "Why Utexo over LSPs or other Lightning solutions?",
      answer: "Lightning channel management today is handled by Lightning Service Providers (LSPs).\n\nUtexo adds an execution layer on Bitcoin that coordinates with LSPs, abstracts inbound and outbound liquidity, and improves UX.\n\nIt brings Lightning, RGB, and Bitcoin-native UTXO transport solutions such as statechains into a single environment that is built for stablecoin flows.",
      bullets: []
    },
    {
      question: "What are the actual fees in Utexo?",
      answer:  `
        Users pay:\n

        <ul class='list-disc list-inside space-y-2'>
          <li>Lightning micro routing fees</li>
          <li>AMM swap fees when swapping assets</li>
          <li>Optional bridge fees</li>
        </ul>
        <br/>
        There is no per-transaction Bitcoin fee for RGB transfers because they happen off-chain.
      `,
      bullets: []
    },
    {
      question: "How scalable is Utexo for BTCFi growth?",
      answer: "By avoiding global consensus, RGB removes the main bottleneck for scaling.\n\nTransfers are validated locally by the participants, and only small commitments land on Bitcoin to anchor ordering and prevent double spending.\n\nUtexo builds on this by aggregating Lightning channels and state channels. Throughput grows with hardware capacity rather than blockspace, allowing very high transaction volumes without burdening Bitcoin.",
      bullets: ["Unlocks $300B+ stablecoin liquidity for BTCFi", "Enables native yield opportunities for Bitcoin and USDT"]
    },
    {
      question: "Can I integrate Utexo into my wallet or app?",
      answer: `
        Utexo provides:<br/><br/>
        <ul class='list-disc list-inside space-y-2'>
          <li>APIs for routing, swaps, and proofs</li>
          <li>SDKs for wallet and app integration</li>
          <li>Standardized interfaces for handling RGB state</li>
          <li>Access to the execution layer without running Lightning or RGB infrastructure</li>
        </ul>
        <br/>
        Documentation and test tools will be available at launch.<br/>
        For partnership inquiries: help@utexo.com
      `,
      bullets: []
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
                      <div
                        className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight"
                        dangerouslySetInnerHTML={{
                          __html: faq.answer.replace(/\n\n/g, "<br/><br/>"),
                        }}
                      />
                    )}
                    {faq.bullets && faq.bullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                      {faq.bullets.map((bullet, i) => (
                        <li
                          key={i}
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
                        <div
                          className="text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50 leading-tight"
                          dangerouslySetInnerHTML={{
                            __html: faq.answer.replace(/\n\n/g, "<br/><br/>"),
                          }}
                        />
                      )}
                      {faq.bullets && faq.bullets.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] lg:text-[16px] text-black opacity-50" style={{ fontFamily: "'PP Mori', sans-serif" }}>
                        {faq.bullets.map((bullet, i) => (
                          <li
                            key={i}
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

