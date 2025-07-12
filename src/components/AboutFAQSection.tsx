'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What does “European-style” mean in your work?',
    answer:
      'To us, European-style means prioritizing design quality, attention to detail, and thoughtful craftsmanship. It reflects a slower, more intentional pace—where form and function are balanced, and aesthetics are never an afterthought. We combine this sensibility with Indian precision and agility to deliver work that feels polished, purpose-driven, and human.',
  },
  {
    question: 'What is MaisonQ Studio’s mission?',
    answer:
      'Our mission is to help brands build smarter, more beautiful digital experiences through strategic design and development. We aim to be more than service providers—we aim to be long-term partners in your growth.',
  },
  {
    question: 'What is your vision as a studio?',
    answer:
      'Our vision is to redefine what it means to collaborate with a web agency—by putting clarity, trust, and creativity at the center of everything we do. We want to be known not just for building websites, but for building relationships that last.',
  },
  {
    question: 'What sets you apart from other agencies?',
    answer:
      'We don’t scale through volume or templates. We work on fewer projects at a time, so each client gets senior-level focus, intentional design, and clear communication. Every line of code and every pixel has purpose. We believe in doing less—but better.',
  },
  {
    question: 'How do you approach partnerships with clients?',
    answer:
      'We treat every project as a shared journey. That means open dialogue, weekly check-ins, shared planning tools, and full transparency. We don’t hand off files and disappear—we stay, support, and evolve with your brand over time.',
  },
  {
    question: 'Why is your studio based in India but focused globally?',
    answer:
      'India gives us access to incredible engineering talent and a strong work ethic. But our design philosophy, communication style, and standards are deeply influenced by working with global clients—especially in Europe and North America. It’s a blend that lets us deliver world-class work with efficiency and warmth.',
  },
]

export default function AboutFAQSection() {
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
