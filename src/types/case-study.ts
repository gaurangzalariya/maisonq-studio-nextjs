export type ScreenBreakdown = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export type Highlight = {
  title: string;
  description: string;
  icon: keyof typeof import('lucide-react');
};

export type MetaTags = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterCreator: string;
  twitterSite: string;
  canonicalUrl: string;
  publishedTime: string;
  modifiedTime: string;
  author: string;
  section: string;
  tags: string[];
};

export type CaseStudyDetail = {
  id: string;
  slug: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  clientName: string;
  industry: string;
  duration: string;
  overview: string;
  objective: string;
  screenBreakdowns: ScreenBreakdown[];
  highlights: Highlight[];
  finalThoughts: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  meta: MetaTags;
};

export type CaseStudyOverview = {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnailImage: string;
  clientName: string;
  industry: string;
  tags: string[];
  meta: MetaTags;
};

export interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
} 