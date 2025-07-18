import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import CaseStudyDetailClient from './CaseStudyDetailClient';
import { CaseStudyPageProps } from '@/types/case-study';
import { checkFields, Diff, FirstArg } from '@/types/utils';

type TEntry = {
  default: ComponentType<CaseStudyPageProps>
};

checkFields<Diff<CaseStudyPageProps, FirstArg<TEntry['default']>>>();

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  const { meta } = caseStudy;

  return {
    metadataBase: new URL(process.env.NODE_ENV === 'production' 
      ? 'https://maisonq.studio'
      : 'http://localhost:3000'
    ),
    title: meta.title,
    description: meta.description.replace(/<[^>]*>/g, ''), // Strip HTML for meta description
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    category: meta.section,
    openGraph: {
      type: 'article',
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: meta.ogUrl,
      siteName: meta.twitterSite,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.ogTitle,
        },
      ],
      publishedTime: meta.publishedTime,
      modifiedTime: meta.modifiedTime,
      authors: [meta.author],
      tags: meta.tags,
    },
    twitter: {
      card: meta.twitterCard,
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      site: meta.twitterSite,
      creator: meta.twitterCreator,
      images: [meta.twitterImage],
    },
    alternates: {
      canonical: meta.canonicalUrl,
    },
  };
}

const CaseStudyPage: ComponentType<CaseStudyPageProps> = async ({ params }) => {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetailClient caseStudy={caseStudy} />;
};

export default CaseStudyPage;