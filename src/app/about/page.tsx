import PageHero from '@/components/PageHero'
import TextSection from '@/components/TextSection'
import AboutFAQSection from '@/components/AboutFAQSection'

export const metadata = {
  title: 'About Us | MaisonQ Studio - Boutique Web Agency from India',
  description: 'Learn more about our European-inspired approach, our mission, and how we build long-term partnerships through strategic Shopify & WordPress development.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'About MaisonQ Studio',
    description: 'Meet the team behind MaisonQ — blending European design sensibility with Indian precision to build lasting client relationships.',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'MaisonQ Studio About Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MaisonQ Studio',
    description: 'Get to know our studio, our mindset, and why we’re built for partnerships—not projects.',
    images: ['/social-image.png'],
  },
};

export default function About() {
  return (
    <>
      <PageHero
        heading="More Than a Studio. A Growth Partner."
        subtext="At MaisonQ Studio, we work alongside you-not just for you-to turn your ideas into purposeful, high-performing websites."
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
        }}
      />
      <TextSection
        heading="Why MaisonQ?"
        subtext="Our studio is built for companies that value detail, partnership, and growth. We approach every project with an ownership mindset-because your success is our success."
        primaryCTA={{ label: 'Start a Conversation', href: '/contact' }}
        styling={{
          primaryCTABackgroundColor: 'bg-[#938f8a]',
          primaryCTATextColor: 'text-white'
        }}
      />
      <AboutFAQSection />
    </>
  )
}
