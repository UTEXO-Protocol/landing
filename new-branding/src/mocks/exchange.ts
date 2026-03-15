import { Feature } from "@/components/common/Features";

export const exchangeHeroTags = ["Cross-exchange settlement", "BTC & USDT yield", "Instant settlement with predictable fee", "Enable micro withdrawals"];
export const exchangeFeatures: Feature[] = [
  {
    icon: "/common/features/expand.svg",
    title: "Expand USDT withdrawal options",
    description: "Offer native USDT withdrawals on Lightning with pre-fixed fees and private execution.",
  },
  {
    icon: "/common/features/native.svg",
    title: "Eliminate pre-funding",
    description: "Unlock cross-exchange settlement for HFTs and market makers without pre-funding multiple accounts.",
  },
  {
    icon: "/common/features/monetize.svg",
    title: "Monetize idle reserves",
    description: "Generate native yield for BTC and USDT over Lightning.",
  },
  {
    icon: "/common/features/model.svg",
    title: "Abstract the infrastructure",
    description: "Operate on Lightning and Bitcoin without managing liquidity or channels.",
  },
];
