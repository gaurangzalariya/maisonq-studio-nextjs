'use client'
import { useState, useEffect } from 'react';

type SectionProps = {
  heading: string
  subtext: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  styling?: {
    backgroundColor?: string
    textColor?: string
    primaryCTABackgroundColor?: string
    primaryCTATextColor?: string
  }
}

export default function TextSection({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
  styling,
}: SectionProps) {
  const [cleanHTML, setCleanHTML] = useState(subtext);

  useEffect(() => {
    const sanitizeHTML = async () => {
      const DOMPurify = (await import('dompurify')).default;
      setCleanHTML(DOMPurify.sanitize(subtext));
    };
    sanitizeHTML();
  }, [subtext]);

  return (
    <div className={`relative isolate px-6 lg:px-8 ${styling?.backgroundColor ? `${styling.backgroundColor}` : ''} ${styling?.textColor ? `${styling.textColor}` : ''}`}>
      <div className="mx-auto max-w-5xl py-15 lg:py-30">
        <div className="text-center">
          <h2 className="text-4xl font-secondary font-semibold tracking-tight text-balance sm:text-6xl">
            {heading}
          </h2>
          <div
            className="mt-8 text-lg font-medium text-pretty sm:text-xl/8"
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
          />
          {primaryCTA && (
            <div className="mt-10 flex items-center justify-center gap-x-6">            
              <a href={primaryCTA.href} className={`rounded-md ${styling?.primaryCTABackgroundColor ? `${styling.primaryCTABackgroundColor}` : 'bg-indigo-600'} px-5 py-3 text-base font-semibold ${styling?.primaryCTATextColor ? `${styling.primaryCTATextColor}` : 'text-white'} shadow-xs`}>
                {primaryCTA.label} <span aria-hidden="true">→</span>
              </a>
              {secondaryCTA && (
                <a href={secondaryCTA.href} className="text-sm/6 font-semibold">
                  {secondaryCTA.label} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}