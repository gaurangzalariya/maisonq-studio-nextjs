import { HeadingTwo, ButtonLarge } from './UI/UI'

type SectionProps = {
  heading: string
  subtext: string
  primaryCTA?: {
    label: string
    href: string
  }
  styling?: {
    backgroundColor?: string
    textColor?: string
  }
}

export default function TextSection({
  heading,
  subtext,
  primaryCTA,
  styling,
}: SectionProps) {

  return (
    <div className={`relative isolate px-6 lg:px-8 ${styling?.backgroundColor ? `${styling.backgroundColor}` : ''} ${styling?.textColor ? `${styling.textColor}` : ''}`}>
      <div className="mx-auto max-w-5xl py-15 lg:py-30">
        <div className="text-center">
          <div className='flex flex-col gap-4 lg:gap-8'><HeadingTwo heading={heading} subtext={subtext} /></div>
          {primaryCTA && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ButtonLarge
                  label={primaryCTA.label}
                  href={primaryCTA.href}
                  icon={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}