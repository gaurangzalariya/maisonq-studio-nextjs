import PageHero from '@/components/PageHero'
import TestimonialSlider from '@/components/TestimonialSlider'

export const metadata = {
  title: "Client Reviews | MaisonQ Studio – Trusted Shopify & WordPress Partner",
  description: "Hear directly from the brands we've partnered with. Read client reviews and testimonials about our design, development, and strategic collaboration across Shopify and WordPress projects.",
  openGraph: {
    title: "Client Testimonials | MaisonQ Studio",
    description: "Explore feedback from founders, marketers, and creatives who've partnered with MaisonQ Studio to build elegant, high-performing websites.",
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: "MaisonQ Studio Client Testimonials",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MaisonQ Studio Reviews",
    description: "What it's like to work with MaisonQ? Read client reviews from our Shopify and WordPress collaborations.",
    images: ['/social-image.png'],
  },
};

export default function About() {
  return (
    <>
      <PageHero
        heading="Partners in Progress"
        subtext="At MaisonQ Studio, our clients aren't just customers—they're collaborators. Here's what they have to say about working with us to build, grow, and evolve their digital presence."
        primaryCTA={{ 
          label: "Let's Build Something Together", 
          href: "/contact",
        }}
        styling={{
          backgroundColor: "bg-[#edecea]",
          textColor: "text-gray-900",
        }}
      />
      <TestimonialSlider />
    </>
  )
}