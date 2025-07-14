import PageHero from '@/components/PageHero'
import TextSection from '@/components/TextSection'
import ResponsiveCard from '@/components/ResponsiveCard'
import FaqSection from '@/components/FaqSection'

export const metadata = {
  title: "Our Services | Shopify & WordPress Experts - MaisonQ Studio",
  description: "Explore our high-quality Shopify Plus development, fast & scalable WordPress solutions, and collaborative design partnerships.",
  openGraph: {
    title: "Services - MaisonQ Studio",
    description: "Custom Shopify themes, performance-optimized WordPress development, and design partnerships built for growth.",
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: "MaisonQ Studio Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Services - MaisonQ Studio",
    description: "Tailored Shopify & WordPress development with a design-first mindset.",
    images: ['/social-image.png'],
  },
};

const faqs = [
  {
    question: "What platforms do you specialize in?",
    answer:
      "We specialize in Shopify (including Shopify Plus) and WordPress. These platforms allow us to deliver high-performance, scalable, and design-forward digital experiences that grow with your business. We choose tools based on fit-not trend.",
  },
  {
    question: "Do you only work on new builds, or can you improve existing sites?",
    answer:
      "Both. Many of our clients come to us with an existing site that needs refinement-whether it's speed optimization, conversion improvements, redesigns, or restructuring. We also build from the ground up when needed, always with your goals in focus.",
  },
  {
    question: "What makes your Shopify development different?",
    answer:
      "We approach Shopify like product designers: performance, buyer psychology, and brand identity are central to every decision. From bespoke themes to clean cart flows and integrations, our goal is to make your storefront not just beautiful-but effective.",
  },
  {
    question: "What is your approach to WordPress development?",
    answer:
      "We build WordPress sites that are fast, modular, and easy to manage. Each project includes a thoughtfully designed backend-no clutter, no confusion. You'll be able to edit your content confidently, without relying on us for every little update.",
  },
  {
    question: "What does a design partnership include?",
    answer:
      "Our design partnerships go beyond UI mockups. We co-create in Figma, develop component systems, refine UX, and iterate with you. You'll have a collaborative process from concept to code, including ongoing support as your brand evolves.",
  },
  {
    question: "Do you use templates or pre-built themes?",
    answer:
      "No. Every project is custom-designed and engineered to fit your brand, your audience, and your business goals. While we work efficiently, we never rely on cookie-cutter solutions.",
  },
  {
    question: "Can you support us after launch?",
    answer:
      "Yes-we believe launch is just the beginning. We offer flexible hour-based support and maintenance packages for post-launch improvements, new features, A/B testing, or optimization. You won't be left on your own.",
  },
]


export default function Services() {
  return (
    <>
      <PageHero
        heading="What We Do, Together"
        subtext="From custom Shopify builds to scalable WordPress solutions, we partner with you to design, develop, and grow with purpose."
        primaryCTA={{
          label: "Let's Work Together",
          href: "/contact"
        }}
        styling={{
          backgroundColor: "bg-[#edecea]",
          textColor: "text-gray-900",
          primaryCTABackgroundColor: "bg-[#938f8a]",
          primaryCTATextColor: "text-white"
        }}
      />
      <div className='max-w-6xl mx-auto px-6 py-15 lg:py-30 flex flex-col gap-6 lg:gap-15'>
        <ResponsiveCard
          title="Shopify & Shopify Plus Development"
          description="We design and build custom Shopify storefronts that don't just look beautiful-they convert. From performance-focused themes to bespoke integrations, we craft ecommerce experiences tailored to your brand and optimized for your buyers. Whether you're launching, scaling, or migrating to Shopify Plus, our studio works closely with you to create seamless, elegant solutions that grow with your business."
          image="/service-shopify-development.png"
          href="/services/shopify-development"
        />
        <ResponsiveCard
          title="WordPress Development"
          description="Our WordPress builds are clean, secure, and scalable-engineered for performance and ease of use. We develop with intention: every layout is modular, every CMS interface is thoughtfully designed, and every site is tailored to support content, SEO, and speed. Whether you're running a media-heavy blog or a business site, we ensure your presence is fast, reliable, and future-ready."
          image="/service-wordpress-cms.png"
          href="/services/wordpress-development"
        />
        <ResponsiveCard
          title="Design Partnerships"
          description="More than a one-time service, our design offering is collaborative. Starting in Figma, we work hand-in-hand with your team to shape digital products that align with your goals and visual identity. From design systems to UI/UX, our focus is on harmony-balancing form and function, style and strategy. We stay with you from concept to final build and beyond, offering ongoing design and dev support as your brand evolves."
          image="/service-figma-design.png"
          href="/services/design-partnerships"
        />
      </div>
      <TextSection
        heading="Where Collaboration Meets Craftsmanship"
        subtext="At MaisonQ Studio, we follow a studio-style rhythm-lean, hands-on, and detail-focused. Every project is a shared journey, with regular check-ins, transparent communication, and a deep respect for craftsmanship. We don't do templates or handoffs. We do partnerships."
        primaryCTA={{
          label: "Let's Work Together",
          href: "/contact"
        }}
        styling={{
          backgroundColor: "bg-[#edecea]",
          textColor: "text-gray-900",
        }}
      />
      <FaqSection faqs={faqs} title="Frequently asked questions" />
    </>
  )
}
