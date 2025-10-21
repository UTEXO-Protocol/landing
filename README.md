# UTEXO - Native Bitcoin Trading Platform

A modern, responsive landing page for UTEXO, showcasing native on-chain BTC/USDT trading pairs built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Optimized Performance**: Built with Next.js 15 and React 19 for optimal performance
- **Tailwind CSS 4**: Utilizing the latest Tailwind CSS features for modern styling
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **3D Visual Elements**: Eye-catching 3D elements and gradients

## 📋 Sections

- **Navigation**: Fixed navigation with smooth scroll to sections
- **Hero Section**: Compelling headline with key statistics and CTAs
- **Features**: Three feature cards highlighting trading pairs, privacy, and technology
- **Stats**: Key metrics displayed in a grid layout
- **Technology**: Detailed section about the Bitcoin-based technology
- **CTA Section**: Call-to-action for user conversion
- **Footer**: Comprehensive footer with links and branding

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.6](https://nextjs.org)
- **React**: [React 19.1.0](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **TypeScript**: Type-safe development
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Design Assets

All design assets are located in the `/public` folder:
- UTEXO Logo (`Group 3.png`)
- Shield Icon (`79235d8aec7443fdd482b9c99e47cc7fcd661c7d.png`)
- 3D Elements (`Group 39.png`, `Group 40.png`, etc.)
- Feature Cards (`Group 18.png`)
- Bitcoin Magazine Logo (`BM.png`)

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🎯 Project Structure

```
bitcoin-private/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page (imports components)
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico
│   └── components/            # Reusable React components
│       ├── Navigation.tsx     # Fixed navigation header
│       ├── Hero.tsx           # Hero section with green background
│       ├── Stats.tsx          # $200B+ statistics display
│       ├── WhyUtexo.tsx       # Why UTEXO feature cards
│       ├── ProductSuite.tsx   # Product suite section (dark)
│       ├── Features.tsx       # Features list with descriptions
│       ├── Quote.tsx          # Bitcoin Magazine quote section
│       ├── FAQ.tsx            # FAQ two-column layout
│       ├── Footer.tsx         # Footer with links and social
│       └── index.ts           # Component exports
├── public/                    # Static assets (images)
├── package.json
├── tsconfig.json
└── README.md
```

## 📦 Components

### Navigation
Fixed header with logo, navigation links, and CTA button.
- Sticky positioning
- Smooth scroll to sections
- Responsive design with mobile breakpoints

### Hero
Main hero section with dark green background and 3D elements.
- Background image with overlay
- Large headline text
- Positioned 3D graphics
- Descriptive text overlay

### Stats
Large $200B+ statistics display.
- Centered layout
- Massive typography
- Gray background

### WhyUtexo
Feature cards explaining UTEXO benefits.
- Three-column grid of features
- Two-column cards with images
- "Backed by Tether" card with shield
- Trading visual card

### ProductSuite
Dark section showcasing product offerings.
- Black background with white text
- Product cards with icons
- Description and CTA
- 3D element decoration

### Features
Detailed features list in two-column layout.
- Five key features
- Left: Feature title
- Right: Description
- Dividers between items

### Quote
Testimonial section with Bitcoin Magazine.
- Large quote text
- Logo display
- Navigation arrows
- Gray background

### FAQ
Frequently asked questions in two-column layout.
- 14 questions total
- Responsive grid
- 3D element at bottom

### Footer
Site footer with links and legal information.
- Logo and social icons (Twitter, Facebook, Telegram)
- Privacy policy and terms links
- Legal disclaimer
- Light gray background

## 🎨 Customization

### Colors
The design uses a clean black and white palette with green accents:
- Primary: Black (`#000000`)
- Secondary: White (`#ffffff`)
- Accent: Green (various shades)

### Fonts
- **Geist Sans**: Primary font for body text
- **Geist Mono**: Monospace font for code elements

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the project maintainer.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
