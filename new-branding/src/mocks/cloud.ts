export interface CloudOverviewFeature {
  icon: string;
  text: string;
}

export const cloudOverviewFeatures: CloudOverviewFeature[] = [
  {
    icon: "/cloud/overview/versioned.svg",
    text: "Versioned deployments",
  },
  {
    icon: "/cloud/overview/access.svg",
    text: "Controlled access and permissions",
  },
  {
    icon: "/cloud/overview/health.svg",
    text: "Health and status monitoring",
  },
  {
    icon: "/cloud/overview/lifecycle.svg",
    text: "Node Lifecycle management.",
  },
];

export interface CloudFeature {
  title: string;
  description: string;
  image: string;
}

export const cloudFeatures: CloudFeature[] = [
  {
    title: "Yield",
    description:
      "Generate BTC & USDT yield out of payment transactions processed over the Lightning network",
    image: "/cloud/features/yield.png",
  },
  {
    title: "High Frequency trading",
    description:
      "BTC/USDT cross-exchange settlement for High frequency traders",
    image: "/cloud/features/hft.png",
  },
  {
    title: "Custody, your way",
    description:
      "Choose between Remote signer set up or Operation signing key",
    image: "/cloud/features/custody.png",
  },
  {
    title: "Independent",
    description: "Be in control of your Lightning node operations",
    image: "/cloud/features/independent.png",
  },
  {
    title: "Enterprise grade security",
    description:
      "Security is maintained across the entire node life-cycle to ensure it meets internal security standards",
    image: "/cloud/features/security.png",
  },
];

export interface CloudService {
  title: string;
}

export const cloudServices: CloudService[] = [
  { title: "Wallets" },
  { title: "Custodians" },
  { title: "Exchanges" },
];
