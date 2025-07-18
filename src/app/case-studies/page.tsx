import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';
import { caseStudyOverviews } from '@/data/case-studies';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? 'https://maisonq.studio'
    : 'http://localhost:3000'
  ),
  title: 'Case Studies | Our Work',
  description: 'Explore our portfolio of successful projects and see how we\'ve helped businesses achieve their digital goals.',
  openGraph: {
    title: 'Case Studies & Portfolio | Digital Success Stories',
    description: 'Discover how we help businesses transform their digital presence through innovative design and development solutions.',
    images: [
      {
        url: 'https://placehold.co/1200x630/1a1a1a/ffffff?text=Case+Studies',
        width: 1200,
        height: 630,
        alt: 'Case Studies Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Success Stories | Case Studies',
    description: 'See how we help businesses achieve their digital goals through innovative solutions.',
    images: ['https://placehold.co/1200x600/1a1a1a/ffffff?text=Case+Studies'],
  },
  keywords: [
    'case studies',
    'portfolio',
    'digital transformation',
    'web development',
    'design',
    'success stories',
  ],
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient caseStudies={caseStudyOverviews} />;
} 