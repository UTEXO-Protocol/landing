import { DollarIcon, LayersIcon, LockIcon, RocketIcon } from "@/app/static/images";

export const apiFeatureImages = [
  "/api-product/features/feature-1.svg",
  "/api-product/features/feature-2.svg",
  "/api-product/features/feature-3.svg",
  "/api-product/features/feature-4.svg",
  "/api-product/features/feature-5.svg",
];

export const infrastructureTags = [
  { icon: "/api-product/icon-private.svg", label: "Pre-Fixed fees" },
  { icon: "/api-product/icon-throughput.svg", label: "Volume-independent throughput" },
  { icon: "/api-product/icon-fixed-fees.png", label: "Private by default" },
];

export const infrastructureServices = [
  {
    title: "Settlement",
    description: "Settle instantly with predictable costs and built-in privacy. Integrate once, define costs in advance, and maintain consistent performance regardless of network activity.",
  },
  {
    title: "Swap",
    description: "Non-custodial BTC<>USDT swaps natively on Bitcoin.",
  },
  {
    title: "Bridge",
    description: "Bridge from Tron and EVM networks directly into Utexo payment rails.",
  },
];

interface OperatorItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const operatorsList: OperatorItem[] = [
  {
    icon: <DollarIcon />,
    title: "Control your costs",
    description: "Fees are defined upfront and don’t fluctuate with network activity.",
  },
  {
    icon: <RocketIcon />,
    title: "Settle in real-time",
    description: "Transactions execute off-chain with sub-second finality.",
  },
  {
    icon: <LayersIcon />,
    title: "Scale without surprise",
    description: "Performance stays consistent at 1x or 100x volume.",
  },
  {
    icon: <LockIcon />,
    title: "Reduce public visibility",
    description: "Maintain AML compliance without exposing sensitive data on-chain.",
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
