// Shared TypeScript interfaces and types for the UTEXO project

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ProductCard {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer?: string; 
}

export interface SocialLink {
  platform: 'twitter' | 'facebook' | 'telegram' | 'github' | 'linkedin';
  href: string;
  icon: React.ReactNode;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface TestimonialQuote {
  quote: string;
  source: string;
  logo?: string;
}

// Utility types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type SectionBackground = 'white' | 'gray' | 'black' | 'gradient';

