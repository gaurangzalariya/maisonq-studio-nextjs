'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudyDetail } from '@/types/case-study';
import SanitizedHtml from '@/components/SanitizedHtml';
import PageHero from '@/components/PageHero';
import { ButtonLarge } from '@/components/UI/UI';
import { LucideProps } from 'lucide-react';

const iconComponents: { [key: string]: React.ComponentType<LucideProps> } = {};

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon = ({ name, className }: IconProps) => {
  const [Icon, setIcon] = React.useState<React.ComponentType<LucideProps> | null>(null);

  React.useEffect(() => {
    if (iconComponents[name]) {
      setIcon(iconComponents[name]);
      return;
    }

    const loadIcon = async () => {
      try {
        const mod = await import('lucide-react');
        const IconComponent = mod[name as keyof typeof mod] as React.ComponentType<LucideProps>;
        iconComponents[name] = IconComponent;
        setIcon(IconComponent);
      } catch (error) {
        console.error(`Failed to load icon: ${name}`, error);
      }
    };

    loadIcon();
  }, [name]);

  if (!Icon) {
    return <div className={`${className} bg-gray-200 animate-pulse rounded`} />;
  }

  return <Icon className={className} />;
};

interface Props {
  caseStudy: CaseStudyDetail;
}

export default function CaseStudyDetailClient({ caseStudy }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        heading={caseStudy.title}
        subtext={caseStudy.description}
        styling={{
          backgroundColor: "bg-[#edecea]",
          textColor: "text-gray-900",
        }}
      />

      {/* Overview & Quick Facts */}
      <section className="py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h3 className="text-3xl sm:text-4xl font-secondary font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Overview</h3>
            <div className="mt-8 sm:mt-12 flex flex-col gap-8 sm:gap-x-16 sm:gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <div className="text-base sm:text-lg text-gray-700">
                  <SanitizedHtml html={caseStudy.overview} />
                </div>
                <div className="mt-6 sm:mt-10 text-base sm:text-lg text-gray-900 border-l-4 border-primary pl-4 sm:pl-6">
                  <SanitizedHtml html={caseStudy.objective} />
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <div className="w-full space-y-6 sm:space-y-8 xl:w-80">
                  <div className="flex flex-col-reverse gap-y-2">
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="Building2" className="w-5 h-5 text-primary" />
                      <div className="text-base text-primary">Client</div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">{caseStudy.clientName}</div>
                  </div>
                  <div className="flex flex-col-reverse gap-y-2">
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="Briefcase" className="w-5 h-5 text-primary" />
                      <div className="text-base text-primary">Industry</div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">{caseStudy.industry}</div>
                  </div>
                  <div className="flex flex-col-reverse gap-y-2">
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="Clock" className="w-5 h-5 text-primary" />
                      <div className="text-base text-primary">Duration</div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">{caseStudy.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Solutions */}
      <section className="overflow-hidden py-12 sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          {caseStudy.screenBreakdowns.map((screen, index) => (
            <motion.div
              key={index}
              className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 sm:gap-y-12 lg:gap-x-8 lg:gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-12 mb-16 sm:mb-24 last:mb-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.8
                }
              }}
              viewport={{ once: true, margin: "-20%" }}
            >
              <div className="lg:pt-4 lg:pr-8 order-2 lg:order-1 lg:col-span-4">
                <div className="lg:max-w-lg">
                  <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-pretty text-gray-900 mb-4 sm:mb-6">{screen.title}</h4>
                  <div className="text-base sm:text-lg/8 text-gray-700 prose prose-base max-w-none">
                    <SanitizedHtml html={screen.description} />
                  </div>
                </div>
              </div>
              <motion.div 
                className="relative order-1 lg:order-2 lg:col-span-8"
                initial={{ scale: 0.95, y: 100 }}
                whileInView={{ 
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 1
                  }
                }}
                viewport={{ once: true, margin: "-20%" }}
              >
                <Image
                  src={screen.imageUrl}
                  alt={screen.imageAlt}
                  width={2432}
                  height={1442}
                  className="w-full 2xl:w-[64rem] max-w-none rounded-xl ring-1 ring-gray-400/10"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6">
                  <div className="w-full h-full mx-auto rotate-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-lg opacity-50" />
                </div>
                <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-primary/20"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10">
                    <SanitizedHtml
                      html={caseStudy.testimonial.quote}
                      className="text-2xl font-medium text-gray-900 prose lg:prose-xl"
                    />
                    <footer className="mt-8">
                      <div className="flex items-start">
                        <div>
                          <p className="text-base font-semibold text-gray-900">{caseStudy.testimonial.author}</p>
                          <p className="text-base text-gray-700">{caseStudy.testimonial.position}</p>
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Results & Conclusion */}
      <section className="py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h3 className="text-3xl sm:text-4xl font-secondary font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
              Results & Impact
            </h3>
            <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
              <div className="text-base sm:text-lg text-gray-700 text-center">
                <SanitizedHtml html={caseStudy.finalThoughts} />
              </div>
            </div>

            <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              {caseStudy.highlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  className="flex flex-col-reverse gap-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-3 items-start">
                    <DynamicIcon name={highlight.icon} className="w-12 sm:w-16 h-12 sm:h-16 text-primary flex-shrink-0" />
                    <div className="flex flex-col gap-y-2 items-start">
                      <div className="text-xs font-medium inline-flex items-center gap-x-1.5 rounded-full px-4 py-1.5 bg-white text-gray-600 ring-1 ring-gray-200 ring-inset">{highlight.title}</div>
                      <div className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                        <SanitizedHtml html={highlight.description} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl sm:text-4xl font-secondary font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center mb-4 sm:mb-6">Like what you see?</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">
              Let&apos;s create a mobile experience that converts - tailored to your brand and platform.
            </p>
            <ButtonLarge
              label="Schedule a free discovery call"
              href="/contact"
              icon={true}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}