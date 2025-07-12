import PageHero from '@/components/PageHero'
import TextSection from '@/components/TextSection'

import {Metadata} from "next";
export const metadata = {
  title: 'MaisonQ Studio | Your Strategic Shopify & WordPress Partner',
  description: 'MaisonQ Studio is a European-style web design and development agency based in India, specializing in custom Shopify and WordPress solutions built for long-term growth.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'MaisonQ Studio',
    description: 'European-style Shopify & WordPress development agency, based in India. Focused on partnerships, not just projects.',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'MaisonQ Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaisonQ Studio',
    description: 'European-style Shopify & WordPress agency, focused on detail, growth & lasting partnerships.',
    images: ['/social-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <PageHero
        heading="Your Strategic Shopify & WordPress Partner"
        subtext="European-style WordPress & Shopify agency, based in India - focused on partnerships, not just projects."
        primaryCTA={{ label: 'Book Free Audit', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Services', href: '/services' }}
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
          primaryCTABackgroundColor: 'bg-[#938f8a]',
          primaryCTATextColor: 'text-white'
        }}
      />
      <TextSection
        heading="We're not just developers. We're growth partners."
        subtext="At MaisonQ, we combine European design sensibilities with Indian engineering precision. We don't just build websites—we build relationships. Whether it's a bold Shopify store or a content-rich WordPress platform, we co-create digital experiences that drive lasting value."
      />
    </>
  )
}
