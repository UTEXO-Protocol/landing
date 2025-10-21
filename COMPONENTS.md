# Components Documentation

This document provides detailed information about each component in the UTEXO project.

## Table of Contents
- [Navigation](#navigation)
- [Hero](#hero)
- [Stats](#stats)
- [WhyUtexo](#whyutexo)
- [ProductSuite](#productsuite)
- [Features](#features)
- [Quote](#quote)
- [FAQ](#faq)
- [Footer](#footer)

---

## Navigation

**File:** `src/components/Navigation.tsx`

Fixed navigation header with logo, menu links, and CTA button.

### Features
- Fixed positioning at top of page
- UTEXO logo
- Four navigation links: WHY UTEXO, INSIGHTS, FEATURES, FAQS
- Smooth scroll to anchor sections
- "get started" CTA button
- Responsive: hides menu on mobile (< 1024px)

### Styling
- White background
- Max width: 1440px
- Padding: 8px (mobile) / 16px (desktop)
- Typography: 13px uppercase with wide tracking

### Usage
```tsx
import Navigation from '@/components/Navigation';

<Navigation />
```

---

## Hero

**File:** `src/components/Hero.tsx`

Hero section with dark green background featuring headline and 3D elements.

### Features
- Dark green gradient background with leaf image
- Large headline: "Bitcoin's private stablecoin backbone"
- Two 3D metallic elements positioned dynamically
- Descriptive text overlay in bottom-right
- CTA button with arrow
- Fully responsive layout

### Styling
- Background color: #1a2e1a
- Rounded corners: 24px
- Min height: 600px
- Padding: varies by breakpoint

### Usage
```tsx
import Hero from '@/components/Hero';

<Hero />
```

---

## Stats

**File:** `src/components/Stats.tsx`

Large statistics display section highlighting market cap.

### Features
- Massive "$200B+" text display
- Subtitle: "Total stablecoin market cap on Bitcoin"
- Centered layout
- Gray background for contrast

### Styling
- Font size: 120px (mobile) / 180px (desktop)
- Font weight: light (300)
- Background: gray-50
- Padding: 24px vertical

### Usage
```tsx
import Stats from '@/components/Stats';

<Stats />
```

---

## WhyUtexo

**File:** `src/components/WhyUtexo.tsx`

Feature section explaining UTEXO benefits with multiple card layouts.

### Features
- Section label: "WHY UTEXO"
- Three-column grid of key features
- Two-column grid with RGB-Lightning and Yield cards
- Two large feature cards:
  - Backed by Tether (with shield icon)
  - Trading visual (with green background image)
- Multiple CTAs throughout
- Responsive grid layouts

### Styling
- White background
- Various card styles: solid, gradient, image backgrounds
- Rounded corners: 16px
- Spacing: 20px vertical padding

### Usage
```tsx
import WhyUtexo from '@/components/WhyUtexo';

<WhyUtexo />
```

---

## ProductSuite

**File:** `src/components/ProductSuite.tsx`

Dark section showcasing UTEXO's product offerings.

### Features
- Three product cards with icons:
  - On-chain Bridge (↔)
  - Developer Stack (⌘)
  - Staking Yield (↗)
- Large "Product Suite" headline
- Description text
- CTA button
- 3D element decoration in bottom-right
- `ProductCard` sub-component for reusability

### Props (ProductCard)
```tsx
interface ProductCardProps {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
}
```

### Styling
- Black background with white text
- Border boxes for icons
- Large font for headline (56px-64px)
- Padding: 32px vertical

### Usage
```tsx
import ProductSuite from '@/components/ProductSuite';

<ProductSuite />
```

---

## Features

**File:** `src/components/Features.tsx`

Detailed features list with two-column layout.

### Features
- Section label: "FEATURES"
- Headline: "USDT & BTC support"
- Five feature items in two-column grid:
  - Private & non-custodial
  - Zero-fee, instant settlement
  - Secure & scalable
  - Staking yield
  - Developer friendly
- `FeatureItem` sub-component for consistency
- Border dividers between items

### Props (FeatureItem)
```tsx
interface FeatureItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}
```

### Styling
- White background
- Two-column grid on desktop
- Border-bottom dividers (gray-200)
- Large title text (24px)
- Padding: 24px vertical

### Usage
```tsx
import Features from '@/components/Features';

<Features />
```

---

## Quote

**File:** `src/components/Quote.tsx`

Testimonial/quote section featuring Bitcoin Magazine.

### Features
- Large blockquote about Tether and RGB
- Bitcoin Magazine logo
- Left/right navigation arrows
- Gray background for visual separation

### Styling
- Font size: 24px (mobile) / 32px (desktop)
- Font weight: light (300)
- Background: gray-50
- Max width: 1024px
- Padding: 24px vertical

### Usage
```tsx
import Quote from '@/components/Quote';

<Quote />
```

---

## FAQ

**File:** `src/components/FAQ.tsx`

Frequently asked questions in two-column layout.

### Features
- Section label: "FAQS"
- 14 FAQ questions in two columns:
  - Column 1: 7 questions
  - Column 2: 7 questions
- `FAQItem` sub-component for consistency
- 3D element centered at bottom
- Questions only (expandable answers can be added later)

### Props (FAQItem)
```tsx
interface FAQItemProps {
  question: string;
}
```

### Data Structure
```tsx
const column1Questions = string[];
const column2Questions = string[];
```

### Styling
- White background
- Two-column grid on desktop
- Question font size: 20px
- Spacing: 12px between items
- Padding: 24px vertical

### Usage
```tsx
import FAQ from '@/components/FAQ';

<FAQ />
```

---

## Footer

**File:** `src/components/Footer.tsx`

Site footer with branding, social links, and legal information.

### Features
- UTEXO logo
- Three social media icons:
  - Twitter
  - Facebook
  - Telegram
- `SocialIcon` sub-component for consistency
- Three footer links:
  - Privacy Policy
  - Terms of Service
  - Report Issue
- Legal disclaimer text

### Props (SocialIcon)
```tsx
interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}
```

### Styling
- Light gray background (gray-100)
- Two-row layout on desktop
- Social icons: 20px size
- Border-top divider (gray-300)
- Padding: 12px vertical

### Usage
```tsx
import Footer from '@/components/Footer';

<Footer />
```

---

## Component Composition

The main page (`src/app/page.tsx`) composes all components:

```tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUtexo from "@/components/WhyUtexo";
import ProductSuite from "@/components/ProductSuite";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero />
      <Stats />
      <WhyUtexo />
      <ProductSuite />
      <Features />
      <Quote />
      <FAQ />
      <Footer />
    </div>
  );
}
```

## Best Practices

### Component Design
1. **Single Responsibility**: Each component handles one section
2. **Reusability**: Sub-components (ProductCard, FeatureItem, etc.) for repeated patterns
3. **Props Interface**: TypeScript interfaces for type safety
4. **Responsive Design**: Mobile-first approach with breakpoints
5. **Semantic HTML**: Proper use of section, nav, footer tags

### Styling
1. **Tailwind Classes**: Utility-first approach
2. **Consistent Spacing**: Using Tailwind's spacing scale
3. **Typography Scale**: Consistent font sizes across components
4. **Color Palette**: Limited to black, white, gray, and green
5. **Responsive Images**: Next.js Image component for optimization

### File Organization
```
components/
├── Navigation.tsx    # Standalone components
├── Hero.tsx
├── Stats.tsx
├── WhyUtexo.tsx
├── ProductSuite.tsx  # Contains ProductCard sub-component
├── Features.tsx      # Contains FeatureItem sub-component
├── Quote.tsx
├── FAQ.tsx          # Contains FAQItem sub-component
├── Footer.tsx       # Contains SocialIcon sub-component
└── index.ts         # Barrel exports
```

## Future Enhancements

### Potential Improvements
1. **State Management**: Add interactive features (FAQ accordion, mobile menu)
2. **Animation**: Framer Motion for scroll animations
3. **Data Fetching**: Dynamic content from CMS or API
4. **Form Handling**: Newsletter signup, contact forms
5. **A11y**: Enhanced accessibility features
6. **Testing**: Unit tests with Jest/React Testing Library
7. **Storybook**: Component documentation and testing

### Component Extensions
- **Navigation**: Mobile hamburger menu, dropdown for sub-items
- **FAQ**: Expandable/collapsible answers
- **Quote**: Carousel for multiple testimonials
- **Features**: Filter or search functionality
- **Footer**: Newsletter signup form

---

**Last Updated:** October 2025
**Version:** 1.0.0

