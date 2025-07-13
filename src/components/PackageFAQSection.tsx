'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How does the hour-based package model work?",
    answer:
      "You can purchase a block of hours—5, 10, 20, or 40—that are valid for 90 days. These hours can be used for any Shopify or WordPress task you request. Our team logs time as we work, and you’ll receive a weekly report showing exactly what was done, how much time was used, and what remains.",
  },
  {
    question: "What is the growth-based (percentage of sales) model?",
    answer:
      "For select stores with consistent traffic and revenue, we offer a performance-based partnership. Instead of upfront payments, we work on key design and development tasks in exchange for a fixed percentage of monthly sales. This aligns our success directly with yours—ideal for scaling brands ready to grow strategically.",
  },
  {
    question: "Can I try the hourly model first and switch to a growth partnership later?",
    answer:
      "Yes, and in fact, that’s what many of our long-term clients do. Starting with an hourly package is a great way to get to know our process, communication style, and the quality of work we deliver. If we’re a good fit and you love working with us, we can explore switching to a growth-based partnership where we align incentives and go deeper together.",
  },  
  {
    question: "How do I choose between hourly and revenue-based models?",
    answer:
      "If you prefer flexibility and control, the hourly package model is great—you buy only what you need and use it over 90 days. If you’re a growth-stage brand looking for a deeper, long-term partnership where incentives are aligned, the revenue-based option may be a better fit. We’re happy to help you decide on a discovery call.",
  },
  {
    question: "What can I use the hours for?",
    answer:
      "Hours can be used for anything we offer—Shopify or WordPress development, Figma designs, CRO audits, feature development, bug fixes, speed improvements, plugin/app integrations, and more. As long as it fits within your package, we’ll handle it.",
  },
  {
    question: "How do I track time or progress?",
    answer:
      "For hourly clients, we send a detailed weekly report with time logs, completed tasks, and your current balance. For revenue-based clients, we share weekly updates on what’s been shipped, tested, or optimized to ensure we stay aligned with your goals.",
  },
  {
    question: "Do I need to commit long-term?",
    answer:
      "No long-term commitment is required. Our hour-based model is completely flexible and one-time. The revenue-based model involves a minimum term (usually 3–6 months) to give us enough time to make meaningful impact, but no retainers or upfront fees.",
  },
  {
    question: "Can I switch models later?",
    answer:
      "Yes. Some clients start with hourly packages and switch to revenue-based once we’ve built trust and traction. Others do the reverse. We’re flexible, and we’ll always suggest what’s best for your business stage and goals.",
  },
  {
    question: "What if I need something urgently?",
    answer:
      "For hourly clients, just flag the request as urgent—we’ll do our best to prioritize based on availability and your balance. For revenue-based clients, we often embed into your team’s workflow to handle urgent fixes and updates in real-time.",
  },
];

export default function FAQSection() {
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
