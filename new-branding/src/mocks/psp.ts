export const pspHeroTags = ["Merchant Payments", "PSP-to-PSP Settlement", "Cross-Border & B2B Payments", "Micropayments and High-Frequency Payouts"];

export interface PspFeature {
  icon: string;
  title: string;
  description: string;
}

export const pspFeatures: PspFeature[] = [
  {
    icon: "/psp/features/control.svg",
    title: "Total control.",
    description: "Your margins shouldn’t fluctuate with network activity. Define your costs upfront and watch your business grow without surprise.",
  },
  {
    icon: "/psp/features/native.svg",
    title: "Stay Native.",
    description: "Reduce reliance on wrapped assets and remove counterparty risks.",
  },
  {
    icon: "/psp/features/private.svg",
    title: "Private but Compliant",
    description: "Confidential transfers that are compatible with internal audit and reporting.",
  },
];
