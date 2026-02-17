export const pspHeroTags = [
  "Real-Time Merchants Payments",
  "PSP-to-PSP Internal Settlement",
  "Cross-Border & B2B Payments",
  "Micropayments & High-Frequency Payouts",
];

export interface PspFeature {
  icon: string;
  title: string;
  description: string;
}

export const pspFeatures: PspFeature[] = [
  {
    icon: "/psp/features/private.svg",
    title: "Private but Compliant",
    description:
      "Confidential transfers that stay compatible with internal audit and reporting.",
  },
  {
    icon: "/psp/features/native.svg",
    title: "Stay Native.",
    description:
      "Reduce reliance on smart contracts and wrapped assets.",
  },
  {
    icon: "/psp/features/control.svg",
    title: "Total control.",
    description:
      "Pre-define fees, know your margins and watch your business grow without surprise.",
  },
  {
    icon: "/psp/features/scale.svg",
    title: "Scale safely.",
    description:
      "Performance stays consistent regardless of volumes routed and network activity.",
  },
  {
    icon: "/psp/features/model.svg",
    title: "Maintain your model.",
    description:
      "Custodial, non-custodial, or hybrid, Utexo supports all PSP models.",
  },
  {
    icon: "/psp/features/focus.svg",
    title: "Focus on what matters.",
    description:
      "We take care of the infrastructure, so you can run your business.",
  },
];
