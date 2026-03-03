import { FAQData } from "@/components/faq/FaqItem";

export const FAQs: FAQData[] = [
  {
    question: "What is Utexo?",
    answer:
      "Utexo is an execution and settlement layer for stablecoin payments on Bitcoin. Through a single API integration, It lets payment operators, exchanges, wallets, custodians, neobanks and financial institutions process USDT transactions with fixed costs, and private execution, while being secured by Bitcoin.",
  },
  {
    question: "What problem does Utexo solve?",
    answer:
      "Existing stablecoin rails (Tron, Ethereum, EVM chains) expose businesses to unpredictable fees and public transaction data. Utexo replaces that with a deterministic cost model and confidential transfers settled instantly over Lightning. You know your costs before you execute, but no one can know what you sent or to whom.",
  },
  {
    question: "How does it work under the hood?",
    answer:
      "Utexo combines two Bitcoin-native protocols: the Lightning Network for instant, off-chain payment execution, and RGB for issuing and transferring USDT with confidential, Bitcoin-anchored settlement. Execution happens off-chain for speed and scale; cryptographic commitments are anchored to Bitcoin’s base layer for correctness and finality.",
  },
  {
    question: "What is RGB?",
    answer:
      "RGB is a client-side validation protocol that enables asset issuance and transfer on Bitcoin without exposing transaction data on a public ledger. Unlike EVM tokens, RGB transfers are confidential by default, as balances and counterparties aren't visible on-chain. This is what makes Utexo's USDT private and Bitcoin-native.",
  },
  {
    question: "What assets does Utexo support?",
    answer:
      "Utexo currently supports USDT on Bitcoin via RGB. BTC/USDT swaps are available natively over Lightning. Support for additional stablecoins may follow. Check the docs or contact us for the current roadmap.",
  },
  {
    question: `What does "fixed costs" actually mean?`,
    answer:
      "Fees are predefined at the protocol level and don't fluctuate with network congestion or blockspace demand. You define your cost model upfront: whether you're processing 100 or 100,000 transactions, the unit economics stay the same. This allows you to build flat pricing models and predictable margins into your product.",
  },
  {
    question: "How is Utexo different from using Lightning directly?",
    answer:
      "Running Lightning natively means managing nodes, channels, liquidity, and rebalancing. Utexo abstracts all of that into a single API. You get Lightning-speed settlement and Bitcoin security without operating any infrastructure or embedding protocol logic into your stack.",
  },
  {
    question: "What is RGB, and why pair it with Lightning?",
    answer:
      "RGB is a client-side validation protocol for private, programmable assets on Bitcoin. Utexo pairs RGB with Lightning to enhance scalability while keeping asset logic off-chain.<br/><br/>Together, they create a settlement model where stablecoins move instantly, privately, and without global state updates, all secured by Bitcoin's base layer commitments.<br/><br/>The Utexo execution layer sits between users and a network of professional LSPs, abstracting Lightning's channel management, RGB issuance, and rebalancing challenges so users get a simple stablecoin experience on Bitcoin without giving up custody.",
  },
  {
    question: "Is Utexo custodial?",
    answer:
      "No. Utexo is fully non-custodial. Your keys and your data stay in your environment. Utexo has no access to either. For enterprise deployments via Cloud, node-level access control and lifecycle management are built in, but custody remains entirely yours.",
  },
  {
    question: "How does Utexo handle privacy and compliance?",
    answer:
      "RGB transfers are confidential by design, but Utexo is designed to be compatible with AML requirements and internal audit workflows. Private execution and compliance aren't mutually exclusive here.",
  },
  {
    question: "What is Utexo Cloud?",
    answer:
      "Cloud is Utexo's fully managed Lightning infrastructure product. It lets you run Lightning and RGB without operating nodes yourself. You get versioned deployments, node-level access control, health and status monitoring, and full node lifecycle management. Enterprise-grade infrastructure without the operational overhead.",
  },
  {
    question: "Can I integrate Utexo into my existing stack?",
    answer:
      "Yes. Utexo is exposed via an SDK and API designed to integrate without requiring changes to your key management setup or custody model. There's no need for heavy custom development, it plugs into your current stack.",
  },
  {
    question: "How does Utexo handle high-volume or high-frequency use cases? ",
    answer:
      "Performance stays consistent regardless of volume. Transactions execute off-chain over Lightning and aren't subject to Bitcoin's block time or global fee competition. This makes Utexo suitable for high-frequency trading settlement, mass merchant payouts, and cross-border payment flows at scale.",
  },
  {
    question: "Can I generate yield on BTC or USDT?",
    answer:
      "Yes. Utexo enables native yield generation on BTC and USDT over Lightning, turning payment volume into recurring revenue. This is available for exchanges, custodians, and wallet operators who want to monetize idle reserves or settlement activity.",
  },
  {
    question: "How does the Bridge work?",
    answer:
      "The Bridge lets you route USDT from other networks such as Tron and Ethereum into Bitcoin's private payment rails. It's designed for operators who need to consolidate stablecoin flows from multiple networks into a single, cost-predictable execution environment on Bitcoin.",
  },
  {
    question: "How do I get started?",
    answer:
      "Explore the API documentation at <a href='https://docs.utexo.com/' target='_blank'>docs.utexo.com</a>, or contact our team to discuss your use case. Enterprise deployments and Cloud onboarding go through our sales team: reach out via the contact form and we'll take it from there.",
  },
];
