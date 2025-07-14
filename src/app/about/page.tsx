import PageHero from '@/components/PageHero'
import TextSection from '@/components/TextSection'
import FaqSection from '@/components/FaqSection'

export const metadata = {
  title: 'About Us | MaisonQ Studio - Boutique Web Agency from India',
  description: 'Learn more about our European-inspired approach, our mission, and how we build long-term partnerships through strategic Shopify & WordPress development.',
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

const faqs = [
  {
    question: 'What does “European-style” mean in your work?',
    answer:
      'To us, European-style means prioritizing design quality, attention to detail, and thoughtful craftsmanship. It reflects a slower, more intentional pace—where form and function are balanced, and aesthetics are never an afterthought. We combine this sensibility with Indian precision and agility to deliver work that feels polished, purpose-driven, and human.',
  },
  {
    question: 'What is MaisonQ Studio’s mission?',
    answer:
      'Our mission is to help brands build smarter, more beautiful digital experiences through strategic design and development. We aim to be more than service providers—we aim to be long-term partners in your growth.',
  },
  {
    question: 'What is your vision as a studio?',
    answer:
      'Our vision is to redefine what it means to collaborate with a web agency—by putting clarity, trust, and creativity at the center of everything we do. We want to be known not just for building websites, but for building relationships that last.',
  },
  {
    question: 'What sets you apart from other agencies?',
    answer:
      'We don’t scale through volume or templates. We work on fewer projects at a time, so each client gets senior-level focus, intentional design, and clear communication. Every line of code and every pixel has purpose. We believe in doing less—but better.',
  },
  {
    question: 'How do you approach partnerships with clients?',
    answer:
      'We treat every project as a shared journey. That means open dialogue, weekly check-ins, shared planning tools, and full transparency. We don’t hand off files and disappear—we stay, support, and evolve with your brand over time.',
  },
  {
    question: 'Why is your studio based in India but focused globally?',
    answer:
      'India gives us access to incredible engineering talent and a strong work ethic. But our design philosophy, communication style, and standards are deeply influenced by working with global clients—especially in Europe and North America. It’s a blend that lets us deliver world-class work with efficiency and warmth.',
  },
]

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
      <FaqSection faqs={faqs} title="Frequently asked questions" />
    </>
  )
}
