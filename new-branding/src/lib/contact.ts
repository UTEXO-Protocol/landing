export const COMPANY_TYPES = ["psp", "exchange", "wallet", "neobank", "hft", "igaming", "remittance", "ecommerce", "other"] as const;
export const USE_CASES = ["stablecoin", "lightning", "crossborder", "settlement", "igaming", "onofframp", "partnership", "other"] as const;
export const VOLUMES = ["lt100k", "100k_1m", "1m_10m", "10m_100m", "gt100m", "undisclosed"] as const;
export const REGIONS = ["latam", "africa", "sea", "europe", "mena", "na", "global"] as const;
export const HEAR_ABOUT = ["referral", "twitter", "conference", "linkedin", "search", "other"] as const;

export type CompanyType = (typeof COMPANY_TYPES)[number];
export type UseCase = (typeof USE_CASES)[number];
export type Volume = (typeof VOLUMES)[number];
export type Region = (typeof REGIONS)[number];
export type HearAbout = (typeof HEAR_ABOUT)[number];

export const COMPANY_TYPE_LABELS: Record<CompanyType, string> = {
  psp: "Payment Service Provider",
  exchange: "Exchange",
  wallet: "Wallet Provider",
  neobank: "Digital Bank / Neobank",
  hft: "High-Frequency Trading Firm",
  igaming: "iGaming / Gambling Platform",
  remittance: "Remittance Provider",
  ecommerce: "E-commerce Platform",
  other: "Other",
};

export const USE_CASE_LABELS: Record<UseCase, string> = {
  stablecoin: "Stablecoin Payments (USDT)",
  lightning: "Lightning Network Integration",
  crossborder: "Cross-border Payments / Remittances",
  settlement: "Settlement & Treasury",
  igaming: "Player Deposits & Withdrawals",
  onofframp: "On/Off-Ramp Infrastructure",
  partnership: "Technical Partnership / Integration",
  other: "Other",
};

export const VOLUME_LABELS: Record<Volume, string> = {
  lt100k: "< $100K",
  "100k_1m": "$100K – $1M",
  "1m_10m": "$1M – $10M",
  "10m_100m": "$10M – $100M",
  gt100m: "$100M+",
  undisclosed: "Prefer not to say",
};

export const REGION_LABELS: Record<Region, string> = {
  latam: "Latin America",
  africa: "Africa",
  sea: "Southeast Asia",
  europe: "Europe",
  mena: "Middle East",
  na: "North America",
  global: "Global / Multi-region",
};

export const HEAR_ABOUT_LABELS: Record<HearAbout, string> = {
  referral: "Referral",
  twitter: "Twitter / X",
  conference: "Conference / Event",
  linkedin: "LinkedIn",
  search: "Search",
  other: "Other",
};
