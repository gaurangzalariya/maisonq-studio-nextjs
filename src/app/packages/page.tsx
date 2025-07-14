import PageHero from '@/components/PageHero'
import FaqSection from '@/components/FaqSection'
import { HeadingThree } from '@/components/UI/UI'

export const metadata = {
  title: "Flexible Pricing Models | MaisonQ Studio",
  description:
    "Choose between hourly packages (5-40 hours) or a growth-based partnership where we work for a percentage of your store's sales. No retainers, no fluff-just results.",
  openGraph: {
    title: "Flexible Pricing - MaisonQ Studio",
    description:
      "Work with us on your terms. Choose hourly packages or a performance-based partnership aligned with your success. Ideal for growing Shopify & WordPress brands.",
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: "MaisonQ Studio Packages",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shopify & WordPress Pricing - MaisonQ Studio",
    description:
      "Transparent hourly packages or a growth-based model-tailored to how you want to scale. Explore flexible options built for ambitious brands.",
    images: ['/social-image.png'],
  },
};

const faqs = [
  {
    question: "How does the hour-based package model work?",
    answer:
      "You can purchase a block of hours-5, 10, 20, or 40-that are valid for 90 days. These hours can be used for any Shopify or WordPress task you request. Our team logs time as we work, and you'll receive a weekly report showing exactly what was done, how much time was used, and what remains.",
  },
  {
    question: "What is the growth-based (percentage of sales) model?",
    answer:
      "For select stores with consistent traffic and revenue, we offer a performance-based partnership. Instead of upfront payments, we work on key design and development tasks in exchange for a fixed percentage of monthly sales. This aligns our success directly with yours-ideal for scaling brands ready to grow strategically.",
  },
  {
    question: "Can I try the hourly model first and switch to a growth partnership later?",
    answer:
      "Yes, and in fact, that's what many of our long-term clients do. Starting with an hourly package is a great way to get to know our process, communication style, and the quality of work we deliver. If we're a good fit and you love working with us, we can explore switching to a growth-based partnership where we align incentives and go deeper together.",
  },  
  {
    question: "How do I choose between hourly and revenue-based models?",
    answer:
      "If you prefer flexibility and control, the hourly package model is great-you buy only what you need and use it over 90 days. If you're a growth-stage brand looking for a deeper, long-term partnership where incentives are aligned, the revenue-based option may be a better fit. We're happy to help you decide on a discovery call.",
  },
  {
    question: "What can I use the hours for?",
    answer:
      "Hours can be used for anything we offer-Shopify or WordPress development, Figma designs, CRO audits, feature development, bug fixes, speed improvements, plugin/app integrations, and more. As long as it fits within your package, we'll handle it.",
  },
  {
    question: "How do I track time or progress?",
    answer:
      "For hourly clients, we send a detailed weekly report with time logs, completed tasks, and your current balance. For revenue-based clients, we share weekly updates on what's been shipped, tested, or optimized to ensure we stay aligned with your goals.",
  },
  {
    question: "Do I need to commit long-term?",
    answer:
      "No long-term commitment is required. Our hour-based model is completely flexible and one-time. The revenue-based model involves a minimum term (usually 3-6 months) to give us enough time to make meaningful impact, but no retainers or upfront fees.",
  },
  {
    question: "Can I switch models later?",
    answer:
      "Yes. Some clients start with hourly packages and switch to revenue-based once we've built trust and traction. Others do the reverse. We're flexible, and we'll always suggest what's best for your business stage and goals.",
  },
  {
    question: "What if I need something urgently?",
    answer:
      "For hourly clients, just flag the request as urgent-we'll do our best to prioritize based on availability and your balance. For revenue-based clients, we often embed into your team's workflow to handle urgent fixes and updates in real-time.",
  },
];

export default function Packages() {
  return (
    <>
      <PageHero
        heading="Flexible Hours. Transparent Pricing."
        subtext="Buy what you need, use it when you need-no retainers, no fluff. Just premium design & development on your terms."
        primaryCTA={{ label: 'Request a Package', href: '/contact' }}
        styling={{
          backgroundColor: "bg-[#edecea]",
          textColor: "text-gray-900",
          primaryCTABackgroundColor: "bg-[#938f8a]",
          primaryCTATextColor: "text-white"
        }}
      />
      <section className="text-center px-6 py-24 sm:py-32 max-w-5xl mx-auto lg:py-40">
        <div className='mb-4'>
          <HeadingThree
            heading="Hourly Packages"
            subtext=""
          />
        </div>
        
        <p className="text-lg mb-8">
          We work on a flexible hour-based model designed for growing brands.<br />
          Purchase a block of hours (from 5 to 40) and use them over 90 days-no strings, no retainers.
        </p>

        <ul className="list-disc list-inside text-left text-lg space-y-2 max-w-3xl mx-auto">
          <li><strong>Buy only what you need:</strong> Choose from 5, 10, 20, or 40-hour packages</li>
          <li><strong>Use within 90 days:</strong> Ideal for website tweaks, CRO tasks, new features, or designs</li>
          <li><strong>Track every minute:</strong> Weekly report showing hours used and your balance</li>
          <li><strong>No hidden fees:</strong> One-time payment, pay-as-you-go model</li>
        </ul>

        <p className="text-lg mt-8">
          We&apos;ll work based on your requests, provide regular updates, and deliver high-quality work at your pace.
        </p>

        <hr className="my-15 border-t border-[#938f8a] opacity-40" />

        <div className='mb-4'>
          <HeadingThree
            heading="Growth-Based Partnership"
            subtext=""
          />
        </div>

        <p className="text-lg mb-8">
          Prefer to align our success with yours? For select clients, we offer a performance-based model where our compensation is tied to your store&apos;s revenue growth.
        </p>

        <ul className="list-disc list-inside text-left text-lg space-y-2 max-w-3xl mx-auto">
          <li>No upfront cost-ideal for high-potential brands</li>
          <li>We partner deeply, handling CRO, UX, performance & features</li>
          <li>Compensation based on agreed percentage of monthly sales</li>
          <li>Best suited for stores with consistent traffic and sales data</li>
        </ul>

        <p className="text-lg mt-8">
          Note: This model is available by application only and subject to approval.
        </p>
      </section>
      <FaqSection faqs={faqs} title="Frequently asked questions" />
    </>
  )
}