import { Feature } from "@/components/common/Features";

export const enterpiseWalletsHeroTags = ["Off-exchange BTC/USDT transfers", "BTC/USDT yield from wallet", "Merchant & consumer payments", "PSPs settlement rails"];
export const enterpiseWalletsFeatures: Feature[] = [
  {
    icon: "/common/features/control.svg",
    title: "Monetize BTC<>USDT volume",
    description: "Capture fees on settlement activity generated inside your wallet.",
  },
  {
    icon: "/common/features/native.svg",
    title: "Generate BTC&USDT yield over Lightning",
    description: "Allow clients to interact with Lightning directly from the wallet.",
  },
  {
    icon: "/common/features/growth.svg",
    title: "Easy integration without additional KMS requirement",
    description: "Add execution capabilities without altering key management.",
  },
  {
    icon: "/common/features/puzzle.svg",
    title: "Abstract the infrastructure",
    description: "Operate on Lightning and Bitcoin without managing liquidity or channels.",
  },
];
