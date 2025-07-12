import PageHero from '@/components/PageHero'
import TextSection from '@/components/TextSection'
import ServiceFAQSection from '@/components/ServiceFAQSection'

export const metadata = {
  title: 'Our Services | Shopify & WordPress Experts – MaisonQ Studio',
  description: 'Explore our high-quality Shopify Plus development, fast & scalable WordPress solutions, and collaborative design partnerships.',
  openGraph: {
    title: 'Services – MaisonQ Studio',
    description: 'Custom Shopify themes, performance-optimized WordPress development, and design partnerships built for growth.',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'MaisonQ Studio Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services – MaisonQ Studio',
    description: 'Tailored Shopify & WordPress development with a design-first mindset.',
    images: ['/social-image.png'],
  },
};


export default function Services() {
  return (
    <>
      <PageHero
        heading="What We Do, Together"
        subtext="From custom Shopify builds to scalable WordPress solutions, we partner with you to design, develop, and grow with purpose."
        primaryCTA={{
          label: "Let's Work Together",
          href: '/contact'
        }}
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
          primaryCTABackgroundColor: 'bg-[#938f8a]',
          primaryCTATextColor: 'text-white'
        }}
      />
      <TextSection
        heading="Shopify & Shopify Plus Development"
        subtext="We design and build custom Shopify storefronts that don’t just look beautiful—they convert. From performance-focused themes to bespoke integrations, we craft ecommerce experiences tailored to your brand and optimized for your buyers. Whether you're launching, scaling, or migrating to Shopify Plus, our studio works closely with you to create seamless, elegant solutions that grow with your business."
      />
      <TextSection
        heading="WordPress Development"
        subtext="Our WordPress builds are clean, secure, and scalable—engineered for performance and ease of use. We develop with intention: every layout is modular, every CMS interface is thoughtfully designed, and every site is tailored to support content, SEO, and speed. Whether you're running a media-heavy blog or a business site, we ensure your presence is fast, reliable, and future-ready."
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
        }}
      />
      <TextSection
        heading="Design Partnerships"
        subtext="More than a one-time service, our design offering is collaborative. Starting in Figma, we work hand-in-hand with your team to shape digital products that align with your goals and visual identity. From design systems to UI/UX, our focus is on harmony—balancing form and function, style and strategy. We stay with you from concept to final build and beyond, offering ongoing design and dev support as your brand evolves.<br><br>At MaisonQ Studio, we follow a studio-style rhythm—lean, hands-on, and detail-focused. Every project is a shared journey, with regular check-ins, transparent communication, and a deep respect for craftsmanship. We don't do templates or handoffs. We do partnerships."
      />
      <ServiceFAQSection />
    </>
  )
}
