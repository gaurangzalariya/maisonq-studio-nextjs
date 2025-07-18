import { CaseStudyDetail, CaseStudyOverview } from '../types/case-study';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://maisonq.studio'
  : 'http://localhost:3000';

export const caseStudies: CaseStudyDetail[] = [
  {
    id: '1',
    slug: 'stylemuse-concent',
    thumbnailUrl: '/images/case-studies/stylemuse/thumbnail.png',
    title: 'StyleMuse Mobile Concept',
    description: 'Minimal, Chic & Conversion-Focused Mobile Shopping Experience for Women\'s Fashion',
    clientName: 'Fashion Retailer',
    industry: 'E-commerce / Fashion',
    duration: '1 months',
    overview: `
      <p><strong>StyleMuse</strong> is a mobile-first concept designed for a modern women's clothing brand. The focus was to create a sleek, distraction-free shopping experience that blends <strong>aesthetic minimalism with practical UX</strong> - tailored for both <strong>Shopify and WooCommerce</strong> ecosystems.</p>
    `,
    objective: `
      <p>To design a concept that feels <strong>effortless, elegant, and mobile-native</strong> - aligning with StyleMuse's fashion-forward brand while ensuring seamless product discovery and checkout flow.</p>
    `,
    screenBreakdowns: [
      {
        title: 'Welcome Screen',
        description: `
          <p>A minimalist hero section that sets the tone:</p>
          <ul>
            <li>Bold brand name and tagline</li>
            <li>Optional seasonal banner or call-to-action</li>
            <li>Direct path to shop collections</li>
          </ul>
          <p>Designed to create instant brand connection while keeping users focused on shopping.</p>
        `,
        imageUrl: '/images/case-studies/stylemuse/screen-1.png',
        imageAlt: 'Welcome screen showing minimalist hero section'
      },
      {
        title: 'Collection Screen',
        description: `
          <p>Showcases products by category, with smooth navigation and search:</p>
          <ul>
            <li>Clean grid with product images</li>
            <li>Filter by type, price, or color</li>
            <li>Native-feel search bar</li>
            <li>Mobile drawer-style navigation</li>
          </ul>
          <p>Built for intuitive browsing and quick access to bestsellers or curated edits.</p>
        `,
        imageUrl: '/images/case-studies/stylemuse/screen-2.png',
        imageAlt: 'Collection screen showing product grid and filters'
      },
      {
        title: 'Product Screen',
        description: `
          <p>A detailed, mobile-optimized product page that inspires action:</p>
          <ul>
            <li>Large imagery carousel</li>
            <li>Title, price, available sizes</li>
            <li>Add to cart button placed above the fold</li>
            <li>Collapsible details like fabric, care, reviews</li>
          </ul>
          <p>Optimized for quick scanning + confident purchases.</p>
        `,
        imageUrl: '/images/case-studies/stylemuse/screen-3.png',
        imageAlt: 'Product screen showing detailed product information'
      },
      {
        title: 'Cart Screen',
        description: `
          <p>Streamlined checkout prep screen:</p>
          <ul>
            <li>Product overview with thumbnail</li>
            <li>Quantity update or remove</li>
            <li>Checkout button in sticky footer</li>
            <li>Estimated shipping & promo code input</li>
          </ul>
          <p>Frictionless final step toward conversion - polished, yet practical.</p>
        `,
        imageUrl: '/images/case-studies/stylemuse/screen-4.png',
        imageAlt: 'Cart screen showing checkout process'
      }
    ],
    highlights: [
      {
        title: 'Responsive Design',
        description: 'Fully responsive and touch-friendly UX',
        icon: 'Smartphone'
      },
      {
        title: 'Performance',
        description: 'Designed for fast page loads and minimal distractions',
        icon: 'Zap'
      },
      {
        title: 'Integration',
        description: 'Ready for popular e-commerce tools and platforms',
        icon: 'Puzzle'
      }
    ],
    finalThoughts: `
      <p>The StyleMuse concept isn't just a pretty face - it's a purpose-driven, commerce-ready mobile design crafted to turn browsers into buyers. Whether you're on Shopify or WooCommerce, this concept provides a flexible blueprint for high-converting mobile stores.</p>
    `,
    testimonial: {
      quote: 'The team delivered a concept that perfectly balances aesthetic appeal with practical functionality.',
      author: 'Jane Smith',
      position: 'Digital Director, Fashion Retailer'
    },
    meta: {
      title: 'StyleMuse Mobile Concept Case Study | Fashion E-commerce Design',
      description: 'Discover how we created a minimal, chic & conversion-focused mobile shopping experience for a modern women\'s fashion brand.',
      keywords: ['mobile design', 'e-commerce UX', 'fashion retail', 'Shopify design', 'WooCommerce design', 'case study'],
      ogTitle: 'StyleMuse: A Mobile-First Fashion E-commerce Concept',
      ogDescription: 'See how we designed a sleek, distraction-free shopping experience that blends aesthetic minimalism with practical UX for fashion retail.',
      ogImage: 'https://placehold.co/1200x630/1a1a1a/ffffff?text=StyleMuse+Case+Study',
      ogUrl: `${baseUrl}/case-studies/stylemuse-concept`,
      twitterCard: 'summary_large_image',
      twitterTitle: 'StyleMuse: Mobile Fashion Shopping Reimagined',
      twitterDescription: 'A case study on creating an elegant, conversion-focused mobile shopping experience for fashion retail.',
      twitterImage: 'https://placehold.co/1200x600/1a1a1a/ffffff?text=StyleMuse+Case+Study',
      twitterCreator: '@yourstudio',
      twitterSite: '@yourstudio',
      canonicalUrl: `${baseUrl}/case-studies/stylemuse-concept`,
      publishedTime: '2024-01-01T00:00:00Z',
      modifiedTime: '2024-01-01T00:00:00Z',
      author: 'Your Studio',
      section: 'Case Studies',
      tags: ['Mobile Design', 'E-commerce', 'UX Design', 'Fashion Retail', 'Shopify', 'WooCommerce']
    }
  }
];

export const caseStudyOverviews: CaseStudyOverview[] = caseStudies.map(study => ({
  id: study.id,
  slug: study.slug,
  title: study.title,
  description: study.description,
  thumbnailImage: study.thumbnailUrl,
  clientName: study.clientName,
  industry: study.industry,
  tags: study.meta.tags,
  meta: study.meta
})); 