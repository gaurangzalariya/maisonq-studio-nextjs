import { ServicePageContent } from '../types';

export const content: ServicePageContent = {
  hero: {
    heading: "WordPress Development, Without the Bloat",
    subtext: "Custom themes. Lean code. Scalable foundations. We help brands build fast, flexible WordPress sites that convert and grow.",
    ctaLabel: "Let's Build Your WordPress Site Right",
  },
  services: {
    title: "Our WordPress Expertise Includes:",
    intro: "At MaisonQ Studio, we bring clarity and precision to WordPress development. From custom themes to headless builds and WooCommerce stores-we build fast, secure websites designed to perform.",
    subIntro: "Whether you're redesigning, migrating, or scaling-we work as your development partner to create lean, reliable WordPress foundations for long-term growth.",
    list: [
      { label: "Custom WordPress theme design & development", iconName: "Brush" },
      { label: "Speed optimization & Core Web Vitals fixes", iconName: "GaugeCircle" },
      { label: "Conversion-focused UX & page structure", iconName: "MousePointerClick" },
      { label: "WooCommerce setup & optimization", iconName: "MoveUpRight" },
      { label: "Third-party plugin & API integrations", iconName: "Zap" },
      { label: "Headless WordPress with React/Next.js", iconName: "Layers3" },
      { label: "Ongoing support, A/B testing, and CRO iteration", iconName: "Repeat" },
    ],
  },
  faqs: [
    {
      question: "Do you use page builders or custom code?",
      answer: "We focus on clean, maintainable custom themes-no bloated page builders. Whether we're working with your design or starting from scratch, the end result is performance-optimized and easy to manage.",
    },
    {
      question: "Can you help improve an existing WordPress site?",
      answer: "Absolutely. We often jump into existing sites to fix bugs, improve speed, redesign templates, or refactor messy code. Our goal is to leave your site faster, cleaner, and easier to manage.",
    },
    {
      question: "Do you work with WooCommerce?",
      answer: "Yes. From custom WooCommerce stores to advanced product filtering, payment integrations, and performance tuning, we handle all aspects of ecommerce on WordPress.",
    },
    {
      question: "Can you migrate my site to or from WordPress?",
      answer: "Yes, we handle migrations from platforms like Wix, Squarespace, Shopify, and Webflow to WordPress (and vice versa). We ensure a smooth transition with zero SEO loss or data integrity issues.",
    },
    {
      question: "What if I need custom plugin development?",
      answer: "No problem. We can build lightweight custom plugins to solve specific needs-or modify existing ones for better fit. Everything is built with security and future updates in mind.",
    },
    {
      question: "Can you integrate with marketing tools or CRMs?",
      answer: "Yes, we regularly integrate WordPress sites with HubSpot, Mailchimp, Klaviyo, ConvertKit, and more. We also build custom tracking setups with GTM and GA4.",
    },
    {
      question: "Do you offer hosting or maintenance?",
      answer: "While we don't host sites ourselves, we help you choose and set up the best hosting (like Cloudways, WP Engine, or SiteGround). We also offer care plans for updates, backups, and uptime monitoring.",
    },
    {
      question: "Do you offer design services or only development?",
      answer: "Both. We can work from your existing Figma files or handle design in-house-from wireframes and style guides to final UI polish. We design for performance, not just aesthetics.",
    },
    {
      question: "How do you ensure fast load times?",
      answer: "We optimize image loading, defer scripts, minimize plugins, and follow best practices for CSS/JS delivery. Our goal is to pass Core Web Vitals with clean Lighthouse scores.",
    },
    {
      question: "How do I get started?",
      answer: "Just reach out for a discovery call. We'll audit your current setup, understand your goals, and recommend a path forward-whether that's a redesign, migration, or ongoing support.",
    },
  ],
}; 