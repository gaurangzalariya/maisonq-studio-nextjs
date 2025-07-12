'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What platforms do you specialize in?',
    answer:
      'We specialize in Shopify (including Shopify Plus) and WordPress. These platforms allow us to deliver high-performance, scalable, and design-forward digital experiences that grow with your business. We choose tools based on fit-not trend.',
  },
  {
    question: 'Do you only work on new builds, or can you improve existing sites?',
    answer:
      'Both. Many of our clients come to us with an existing site that needs refinement-whether it’s speed optimization, conversion improvements, redesigns, or restructuring. We also build from the ground up when needed, always with your goals in focus.',
  },
  {
    question: 'What makes your Shopify development different?',
    answer:
      'We approach Shopify like product designers: performance, buyer psychology, and brand identity are central to every decision. From bespoke themes to clean cart flows and integrations, our goal is to make your storefront not just beautiful-but effective.',
  },
  {
    question: 'What is your approach to WordPress development?',
    answer:
      'We build WordPress sites that are fast, modular, and easy to manage. Each project includes a thoughtfully designed backend-no clutter, no confusion. You’ll be able to edit your content confidently, without relying on us for every little update.',
  },
  {
    question: 'What does a design partnership include?',
    answer:
      'Our design partnerships go beyond UI mockups. We co-create in Figma, develop component systems, refine UX, and iterate with you. You’ll have a collaborative process from concept to code, including ongoing support as your brand evolves.',
  },
  {
    question: 'Do you use templates or pre-built themes?',
    answer:
      'No. Every project is custom-designed and engineered to fit your brand, your audience, and your business goals. While we work efficiently, we never rely on cookie-cutter solutions.',
  },
  {
    question: 'Can you support us after launch?',
    answer:
      'Yes-we believe launch is just the beginning. We offer flexible hour-based support and maintenance packages for post-launch improvements, new features, A/B testing, or optimization. You won’t be left on your own.',
  },
]

export default function ServiceFAQSection() {
  return (
    <div className="bg-[#938f8a]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-secondary font-semibold tracking-tight text-white sm:text-5xl text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-lg/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-white">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
