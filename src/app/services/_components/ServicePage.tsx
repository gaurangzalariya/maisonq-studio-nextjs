'use client';

import PageHero from '@/components/PageHero';
import ServiceListSection from '@/components/ServicesList';
import FaqSection from '@/components/FaqSection';
import { ServicePageContent } from '../types';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type ServicePageProps = {
  content: ServicePageContent;
};

type ServiceWithIcon = {
  label: string;
  icon: LucideIcon;
};

export default function ServicePage({ content }: ServicePageProps) {
  // Transform the services list to include actual icon components
  const servicesWithIcons: ServiceWithIcon[] = content.services.list.map(service => ({
    label: service.label,
    icon: LucideIcons[service.iconName as keyof typeof LucideIcons] as LucideIcon,
  }));

  return (
    <>
      <PageHero
        heading={content.hero.heading}
        subtext={content.hero.subtext}
        primaryCTA={{ label: content.hero.ctaLabel, href: '/contact' }}
        styling={{
          backgroundColor: 'bg-[#edecea]',
          textColor: 'text-gray-900',
          primaryCTABackgroundColor: 'bg-[#938f8a]',
          primaryCTATextColor: 'text-white',
        }}
      />
      <ServiceListSection
        title={content.services.title}
        intro={content.services.intro}
        subIntro={content.services.subIntro}
        services={servicesWithIcons}
      />
      <FaqSection faqs={content.faqs} title="Frequently asked questions" />
    </>
  );
} 