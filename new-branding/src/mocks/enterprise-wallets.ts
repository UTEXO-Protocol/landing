import { Feature } from "@/components/common/Features";

export const enterpriseWalletsHeroTags = ["Off-exchange BTC/USDT transfers", "BTC/USDT yield from wallet", "Merchant & consumer payments", "PSPs settlement rails"];
export const enterpriseWalletsFeatures: Feature[] = [
  {
    icon: "/common/features/dollar.svg",
    title: "Monetize BTC<>USDT volume",
    description: "Capture fees on settlement activity generated inside your wallet.",
  },
  {
    icon: "/common/features/native.svg",
    title: "Generate BTC&USDT yield over Lightning",
    description: "Allow clients to interact with Lightning directly from the wallet.",
  },
  {
    icon: "/common/features/key.svg",
    title: "Easy integration without additional KMS requirement",
    description: "Add execution capabilities without altering key management.",
  },
  {
    icon: "/common/features/model.svg",
    title: "Abstract the infrastructure",
    description: "Operate on Lightning and Bitcoin without managing liquidity or channels.",
  },
];
