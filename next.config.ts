// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: 'preset-default' },
                // KEEP viewBox so the SVG can scale with Tailwind sizing
                { name: 'removeViewBox', active: false }
              ]
            }
          }
        }
      ]
    });
    return config;
  }
};

export default nextConfig;
