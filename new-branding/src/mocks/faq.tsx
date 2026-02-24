import { FAQData } from "@/components/faq/FaqItem";

export const FAQs: FAQData[] = [
  {
    question: "What is Utexo?",
    answer:
      "Utexo is a Bitcoin-native execution layer that brings stablecoin payments and settlement natively to Bitcoin using Lightning and RGB.\n\nIt combines Bitcoin's security, Lightning's speed, and RGB's privacy and programmability to deliver instant, non-custodial USDT transfers on Bitcoin.\n\nUtexo abstracts the complexity of channels, routing, and RGB state handling, providing a single interface for stablecoin transfers, liquidity provisioning, and developer integration.",
    bullets: ["Unlocks $300B+ stablecoin liquidity for BTCFi", "Enables native yield opportunities for Bitcoin and USDT"],
  },
  {
    question: "How do I bridge USDT into Utexo?",
    answer: "Connect your wallets, select route, and atomic-swap to RGB with Utexo USDT in <60 seconds.\n\nTransfers are fully non-custodial, with sub-second finality and near zero fees.",
    bullets: [
      "The flow is simple:\nApprove > Select amount & chain > Confirm > Receive.",
      "Chains:\nIt currently supports Ethereum, while Tron is scheduled for Q1 2026.",
      "<a href='https://bridge.utexo.com' class='link underline hover:no-underline transition-all duration-150' target='_blank' rel='noopener noreferrer'>Try it now!</a>",
    ],
  },
  {
    question: "How are transfers instant with zero fees?",
    answer:
      "Utexo routes payments through Lightning's channels, while RGB's client-side validation ensures full privacy.\n\nThe hard logic is kept off-chain: since transfers don't touch Bitcoin blockspace and RGB doesn't rely on any global ledger, there's no on-chain fee per transaction.\n\nCosts are limited to the routing micro-fees (0.1%-0.3%) charged by the chosen Lightning channel.",
    bullets: ["Payment channels abstracted for user UX, enabling off-chain, instant, cheap, private txs.", "Atomic swaps with LSPs for global routing", "Impact: Handles $1B+ USDT daily"],
  },
  {
    question: "How does privacy work via RGB?",
    answer:
      "RGB uses client-side validation with blinded state commitments on Bitcoin UTXOs.\n\nOnly the parties involved in a transfer see the details. Observers only see ordinary Bitcoin transactions with embedded commitments, indistinguishable from other taproot/tapret data.\n\nThis makes transfers private by default while still anchored to Bitcoin for ordering and double-spend protection.",
    bullets: [
      "Ownership proofs stay with the user",
      "State transitions are exchanged privately between peers",
      "Bitcoin records only compact commitments, not transaction data",
      "There is no mempool or global ledger of RGB activity",
      "Value: Secure institutional USDT flows",
    ],
  },
  {
    question: "How do I stake / earn yield?",
    answer:
      "Users can provide liquidity (BTC/USDT) to Utexo's channels and AMM, auto-compounding via non-custodial Bitcoin-secured exits.\n\nYield comes from real transaction activity:\nLightning routing fees, swap spreads, and incentives tied to the network's stablecoin flows. We estimate a potential annual yield of 8-15% for LPs.\n\n<strong>Important:</strong><br />No fixed APY is guaranteed. Returns depend entirely on network volume and liquidity usage.",
    bullets: [],
  },
  {
    question: "Are funds SAFU? What are the risks?",
    answer: "Users keep custody of their keys and RGB state.\n\nUtexo does not custody user funds, does not hold balances on behalf of users, and cannot access private transfer data.",
    bullets: ["Insured liquidity; AML compliant"],
  },
  {
    question: "When will Utexo launch?",
    answer: `
      Utexo is rolling out in phases:<br/><br/>
      <ul style="list-style:disc;list-style-position:inside;display:flex;flex-direction:column;gap:0.5rem;">
        <li>USDT–RGB Bridge: <strong>live</strong></li>
        <li>Liquidity layer (AMM, yield): <strong>Q4 2025</strong></li>
        <li>Execution layer (Lightning + RGB state channels): <strong>Q1 2026</strong></li>
        <li>Developer platform (API/SDK): <strong>Q1 2026</strong></li>
      </ul>
      <br/>
      This sequencing matches the technical dependencies: liquidity first, then high-throughput settlement.
    `,
    bullets: [],
  },
  {
    question: "What is RGB, and why pair it with Lightning?",
    answer:
      "RGB is a client-side validation protocol for private, programmable assets on Bitcoin. Utexo pairs RGB with Lightning to enhance scalability while keeping asset logic off-chain.\n\nTogether, they create a settlement model where stablecoins move instantly, privately, and without global state updates, all secured by Bitcoin's base layer commitments.\n\nThe Utexo execution layer sits between users and a network of professional LSPs, abstracting Lightning's channel management, RGB issuance, and rebalancing challenges so users get a simple stablecoin experience on Bitcoin without giving up custody.",
    bullets: ["Enhances privacy and settlement speed"],
  },
  {
    question: "What stablecoins does Utexo support?",
    answer:
      "Utexo launches with USDT on RGB.<br />Other stablecoins that support 1:1 atomic swaps (USDC, USD1, USDA, DAI) will be integrated in later stages.\n\nRGB allows these assets to exist natively inside Bitcoin's UTXO model, without wrapping.",
    bullets: [],
  },
  {
    question: "Is Utexo fully non-custodial?",
    answer: "Yes, users control keys and RGB state, while client-side validation ensures no transaction history published on-chain.",
    bullets: [],
  },
  {
    question: "Why Utexo over LSPs or other Lightning solutions?",
    answer:
      "Lightning channel management today is handled by Lightning Service Providers (LSPs).\n\nUtexo adds an execution layer on Bitcoin that coordinates with LSPs, abstracts inbound and outbound liquidity, and improves UX.\n\nIt brings Lightning, RGB, and Bitcoin-native UTXO transport solutions such as statechains into a single environment that is built for stablecoin flows.",
    bullets: [],
  },
  {
    question: "What are the actual fees in Utexo?",
    answer: `
      Users pay:<br/><br/>
      <ul style="list-style:disc;list-style-position:inside;display:flex;flex-direction:column;gap:0.5rem;">
        <li>Lightning micro routing fees</li>
        <li>AMM swap fees when swapping assets</li>
        <li>Optional bridge fees</li>
      </ul>
      <br/>
      There is no per-transaction Bitcoin fee for RGB transfers because they happen off-chain.
    `,
    bullets: [],
  },
  {
    question: "How scalable is Utexo for BTCFi growth?",
    answer:
      "By avoiding global consensus, RGB removes the main bottleneck for scaling.\n\nTransfers are validated locally by the participants, and only small commitments land on Bitcoin to anchor ordering and prevent double spending.\n\nUtexo builds on this by aggregating Lightning channels and state channels. Throughput grows with hardware capacity rather than blockspace, allowing very high transaction volumes without burdening Bitcoin.",
    bullets: ["Unlocks $300B+ stablecoin liquidity for BTCFi", "Enables native yield opportunities for Bitcoin and USDT"],
  },
  {
    question: "Can I integrate Utexo into my wallet or app?",
    answer: `
      Utexo provides:<br/><br/>
      <ul style="list-style:disc;list-style-position:inside;display:flex;flex-direction:column;gap:0.5rem;">
        <li>APIs for routing, swaps, and proofs</li>
        <li>SDKs for wallet and app integration</li>
        <li>Standardized interfaces for handling RGB state</li>
        <li>Access to the execution layer without running Lightning or RGB infrastructure</li>
      </ul>
      <br/>
      Documentation and test tools will be available at launch.<br/>
      For partnership inquiries: help@utexo.com
    `,
    bullets: [],
  },
];
