import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "WordPress Development Services | MaisonQ Studio - Fast, Flexible, and Custom",
  description:
    "Explore our tailored WordPress development services. From custom themes to headless builds and WooCommerce, we help brands scale with performance-focused foundations.",
  openGraph: {
    title: "Custom WordPress Development by MaisonQ Studio",
    description:
      "We build fast, secure, and scalable WordPress websites-from custom themes to CRO-optimized WooCommerce stores. Designed for performance and growth.",
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: "WordPress Development by MaisonQ Studio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custom WordPress Development by MaisonQ Studio",
    description:
      "Discover how we help brands grow with custom WordPress builds, speed optimizations, and seamless third-party integrations.",
    images: ['/social-image.png'],
  },
}