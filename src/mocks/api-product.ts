export const apiFeatureImages = [
  "/api-product/features/feature-1.svg",
  "/api-product/features/feature-2.svg",
  "/api-product/features/feature-3.svg",
  "/api-product/features/feature-4.svg",
  "/api-product/features/feature-5.svg",
];

export const infrastructureTags = [
  { icon: "/api-product/icon-fixed-fees.png", label: "Pre-Fixed fees" },
  { icon: "/api-product/icon-throughput.svg", label: "Volume-independent throughput" },
  { icon: "/api-product/icon-private.svg", label: "Private by default" },
];

export const infrastructureServices = [
  {
    title: "Swap",
    description: "Swap USDT/BTC directly on Bitcoin.",
  },
  {
    title: "Bridge",
    description: "Bridge stablecoins from other networks directly into Utexo.",
  },
  {
    title: "Settlement",
    description:
      "Settle value instantly with fixed costs and private execution. Integrate once, set fees upfront, and maintain stable speed regardless of network activity.",
  },
];

export interface Operator {
  index: string;
  title: string;
  description: string;
}

export const operators: Operator[] = [
  {
    index: "01",
    title: "Payment Service Providers",
    description: "Global reach. Instant finality. Private execution.",
  },
  {
    index: "02",
    title: "Retail Wallets",
    description: "Global reach. Instant finality. Private execution.",
  },
  {
    index: "03",
    title: "Exchanges",
    description: "Global reach. Instant finality. Private execution.",
  },
  {
    index: "04",
    title: "Enterprise Wallets",
    description: "Global reach. Instant finality. Private execution.",
  },
  {
    index: "05",
    title: "Custodians",
    description: "Global reach. Instant finality. Private execution.",
  },
  {
    index: "06",
    title: "iGaming",
    description: "Global reach. Instant finality. Private execution.",
  },
];

export interface Testimonial {
  quoteBold: string;
  quoteRest: string;
  author: string;
  company: string;
  logo: string;
  variant: "light" | "dark";
}

export const testimonials: Testimonial[] = [
  {
    quoteBold: "Integrating Utexo was the turning point for our cross-border strategy.",
    quoteRest:
      " Before, settlement delays limited our ability to serve high-volume merchants. With Utexo\u2019s API, we unlocked near-instant liquidity for our clients, allowing us to expand into three new markets in under a quarter. It\u2019s not just an API; it\u2019s the backbone of our global operations.\u201D",
    author: "Elena Rostova",
    company: "NOVABANK",
    logo: "/api-product/testimonials/novabank.png",
    variant: "light",
  },
  {
    quoteBold: "We needed a robust way to bring stablecoin utility to the Bitcoin network",
    quoteRest:
      " without the technical debt of building our own indexers. Utexo provided a plug-and-play infrastructure that was incredibly reliable. We cut our development time by 60% and launched our private settlement feature months ahead of schedule. The fixed-cost model was just the cherry on top.\u201D",
    author: "Marcus Chen",
    company: "LEDGERFLOW",
    logo: "/api-product/testimonials/ledgerflow.png",
    variant: "dark",
  },
];
