export const pspHeroTags = ["Merchant Payments", "PSP-to-PSP Settlement", "Cross-Border & B2B Payments", "Micropayments and High-Frequency Payouts"];

export interface PspFeature {
  icon: string;
  title: string;
  description: string;
}

export const pspFeatures: PspFeature[] = [
  {
    icon: "/psp/features/control.svg",
    title: "Control your margins",
    description: "Settlement costs stay predictable, even during peak network activity.",
  },
  {
    icon: "/psp/features/native.svg",
    title: "Eliminate capital fragmentation",
    description: "Settle without pre-funding multiple accounts or locking balances across venues.",
  },
  {
    icon: "/psp/features/growth.svg",
    title: "Maintain consistent performance",
    description: "Handle cross-border and high-volume payment activity without slowdowns.",
  },
  {
    icon: "/psp/features/private.svg",
    title: "Preserve privacy without losing compliance",
    description: "Confidential transfers that stay compatible with internal audit and reporting",
  },
];
