'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How does the hour-based package model work?",
    answer:
      "You can purchase a block of hours—5, 10, 20, or 40—that are valid for 90 days. These hours can be used for any design or development task you need, across Shopify or WordPress. You'll send requests as needed, and our team will deliver the work while tracking the exact time spent. We provide a weekly report so you always know how much time has been used and what's remaining.",
  },
  {
    question: "What can I use the hours for?",
    answer:
      "You can use your hours for nearly any service we offer, including theme customizations, feature development, bug fixes, design tweaks in Figma, performance optimization, CRO improvements, plugin or app integrations, and content updates. Whether it's something small or a new feature rollout—we'll handle it as long as it fits within your purchased hours.",
  },
  {
    question: "What if I don't use all the hours?",
    answer:
      "Your purchased hours are valid for 90 days from the date of purchase. If you haven't used them all by the end of the period, they'll expire. However, we'll remind you well in advance and help you prioritize your remaining time, so you get full value before expiry.",
  },
  {
    question: "How do I track how much time has been used?",
    answer:
      "We send you a detailed report every week that includes: tasks completed, time logged for each, and the remaining balance from your package. This ensures full transparency, and helps you plan ahead based on how much time you have left.",
  },
  {
    question: "Do I need to commit to a long-term retainer?",
    answer:
      "No. This model is intentionally designed to be commitment-free. You only pay for the hours you need, with no ongoing monthly fees or long-term contracts. It's a flexible and transparent approach ideal for startups, growing brands, and lean teams.",
  },
  {
    question: "What if I need something urgent?",
    answer:
      "We understand that sometimes things are time-sensitive. If you have an urgent task, let us know when submitting the request. We prioritize based on availability and your remaining hours, and do our best to accommodate critical needs quickly.",
  },
]

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
