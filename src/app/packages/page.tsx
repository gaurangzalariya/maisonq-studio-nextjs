import PageHero from '@/components/PageHero'
import FAQSection from '@/components/PackageFAQSection'

export const metadata = {
  title: 'Flexible Hour-Based Pricing | MaisonQ Studio',
  description: 'Buy flexible hourly packages (5–40 hours) for Shopify & WordPress development. No retainers. Transparent reports. High-quality results.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Our Packages – MaisonQ Studio',
    description: 'Pay-as-you-go development model with transparent tracking and flexibility. Perfect for growing brands.',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'MaisonQ Studio Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify & WordPress Packages – MaisonQ Studio',
    description: 'Transparent pricing. Flexible hours. Built for brands that want premium support without retainers.',
    images: ['/social-image.png'],
  },
};


export default function Packages() {
  return (
    <>
      <PageHero
        heading="Flexible Hours. Transparent Pricing."
        subtext="Buy what you need, use it when you need—no retainers, no fluff. Just premium design & development on your terms."
        primaryCTA={{ label: 'Request a Package', href: '/contact' }}
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
          primaryCTABackgroundColor: 'bg-[#938f8a]',
          primaryCTATextColor: 'text-white'
        }}
      />
      <section className="text-center px-6 py-24 sm:py-32 max-w-5xl mx-auto lg:py-40">
        <h3 className="text-3xl font-secondary md:text-4xl font-semibold mb-4">
          Simple, Transparent Pricing
        </h3>

        <p className="text-lg mb-8">
          We work on a flexible hour-based model designed for growing brands.<br />
          Purchase a block of hours (from 5 to 40) and use them over 90 days—no strings, no retainers.
        </p>

        <ul className="list-disc list-inside text-left text-lg space-y-2 max-w-3xl mx-auto">
          <li><strong>Buy only what you need:</strong> Choose from 5, 10, 20, or 40-hour packages</li>
          <li><strong>Use within 90 days:</strong> Ideal for website tweaks, CRO tasks, new features, or designs</li>
          <li><strong>Track every minute:</strong> Weekly report showing hours used and your balance</li>
          <li><strong>No hidden fees:</strong> One-time payment, pay-as-you-go model</li>
        </ul>

        <p className="text-lg mt-8">
          We&apos;ll work based on your requests, provide regular updates, and deliver high-quality work at your pace.
        </p>
      </section>
      <FAQSection />
    </>
  )
}
