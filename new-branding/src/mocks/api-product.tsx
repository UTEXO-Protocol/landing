import { DollarIcon, LayersIcon, LockIcon, RocketIcon } from "@/app/static/images";

export const apiFeature = [
  {
    text: "Easy plug in into your stack.  No overhead needed.",
    image: "/api-product/features/feature-1.svg",
    alt: "Feature 1",
  },
  {
    text: "AML and Compliance integrated ",
    image: "/api-product/features/feature-2.svg",
    alt: "Feature 2",
  },
  {
    text: "Move at your customers’ speed. 24/7 global payments.",
    image: "/api-product/features/feature-3.svg",
    alt: "Feature 3",
  },
  {
    text: "Pre-fixed transaction fee with max 20bps per transaction",
    image: "/api-product/features/feature-4.svg",
    alt: "Feature 4",
  },
  {
    text: "Faster settlement means lower locked liquidity",
    image: "/api-product/features/feature-5.svg",
    alt: "Feature 5",
  },
];

export const infrastructureTags = [
  { icon: "/api-product/icon-private.svg", label: "Pre-Fixed fees" },
  { icon: "/api-product/icon-throughput.svg", label: "Volume-independent throughput" },
  { icon: "/api-product/icon-fixed-fees.png", label: "Private by default" },
];

export const infrastructureServices = [
  {
    title: "Settlement",
    description: "Control your costs and process high-volume USDT payments secured by Bitcoin.",
  },
  {
    title: "Swaps",
    description: "Atomic BTC<>USDT conversion without third-party custody, natively on Bitcoin and Lightning.",
  },
  {
    title: "Bridge",
    description: "Route USDT from all networks into Bitcoin on private payment rails.",
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
    title: "Control your margins",
    description: "Fees are defined upfront and don’t fluctuate with network activity.",
  },
  {
    icon: <RocketIcon />,
    title: "Settle in seconds",
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
