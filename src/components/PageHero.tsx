'use client'

type HeroProps = {
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

export default function PageHero({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
  styling,
}: HeroProps) {
  return (
    <div className={`relative isolate px-6 pt-14 lg:px-8 ${styling?.backgroundColor ? `${styling.backgroundColor}` : ''} ${styling?.textColor ? `${styling.textColor}` : ''}`}>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-secondary font-semibold tracking-tight text-balance sm:text-9xl">
            {heading}
          </h1>
          <p className="mx-auto max-w-2xl mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            {subtext}
          </p>
          {primaryCTA && (
            <div className="mt-10 flex items-center justify-center gap-x-6">            
              <a href={primaryCTA.href} className={`rounded-md ${styling?.primaryCTABackgroundColor ? `${styling.primaryCTABackgroundColor}` : 'bg-indigo-600'} px-3.5 py-2.5 text-sm font-semibold ${styling?.primaryCTATextColor ? `${styling.primaryCTATextColor}` : 'text-white'} shadow-xs`}>
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