import PageHero from '@/components/PageHero'
import CalendlyEmbed from '@/components/CalendlyEmbed';

export const metadata = {
  title: 'Let’s Connect | Book a Call with MaisonQ Studio',
  description: 'Book a 30-minute discovery call to explore how we can support your brand with strategic Shopify & WordPress solutions.',
  openGraph: {
    title: 'Contact MaisonQ Studio',
    description: 'Start a conversation with our team and see how we partner with brands to build great digital experiences.',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'MaisonQ Studio Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MaisonQ Studio',
    description: 'Let’s connect. We’re ready to learn about your brand and your goals.',
    images: ['/social-image.png'],
  },
};


export default function ContactPage() {
  return (
    <>
      <PageHero
        heading="Book a Call. Begin the Build."
        subtext="Talk to us about your Shopify or WordPress goals. We'll help you move from idea to impact."
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
        }}
      />
      <CalendlyEmbed
        url="https://calendly.com/gaurangzalariya/30min"
      />
    </>
  )
}
