import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Partnerships | MaisonQ Studio – Collaborative Digital Design in Figma',
  description:
    'Discover our design-first approach to digital product creation. From UI/UX and design systems to ongoing support, we partner with teams to build experiences that scale.',
  openGraph: {
    title: 'Design Partnerships by MaisonQ Studio',
    description:
      'We co-create digital products in Figma—balancing strategy and style for scalable, dev-ready design systems. Explore how our embedded approach helps teams ship better, faster.',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'Design Services by MaisonQ Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Partnerships by MaisonQ Studio',
    description:
      'Collaborative Figma-based design for modern teams. From UI/UX to scalable systems, we build alongside you—not just for you.',
    images: ['/social-image.png'],
  },
};