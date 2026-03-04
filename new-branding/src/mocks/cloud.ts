export interface CloudOverviewFeature {
  icon: string;
  text: string;
}

export const cloudOverviewFeatures: CloudOverviewFeature[] = [
  {
    icon: "/cloud/overview/versioned.svg",
    text: "Versioned deployments.",
  },
  {
    icon: "/cloud/overview/access.svg",
    text: "Node-level access control.",
  },
  {
    icon: "/cloud/overview/health.svg",
    text: "Health and status monitoring.",
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
    description: "Turn BTC<>USDT volume into recurring revenue.",
    image: "/cloud/features/yield.svg",
  },
  {
    title: "High-Frequency Trading",
    description: "BTC<>USDT cross-exchange settlement for institutional traders.",
    image: "/cloud/features/hft.svg",
  },
  {
    title: "Always stay in control of your keys",
    description: "Your data is stored in your environment. Utexo has no access to your keys.",
    image: "/cloud/features/custody.svg",
  },
  {
    title: "Enterprise-grade security",
    description: "Built-in safeguards across the entire node lifecycle.",
    image: "/cloud/features/security.svg",
  },
];

export interface CloudService {
  title: string;
}

export const cloudServices: CloudService[] = [{ title: "Wallets" }, { title: "Custodians" }, { title: "Exchanges" }];
