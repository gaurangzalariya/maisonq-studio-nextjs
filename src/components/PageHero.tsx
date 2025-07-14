'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ButtonNormal, ButtonText, HeadingOne } from './UI/UI'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function PageHero({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
  styling,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={`relative isolate px-6 pt-14 lg:px-8 ${styling?.backgroundColor ? `${styling.backgroundColor}` : ''} ${styling?.textColor ? `${styling.textColor}` : ''}`}>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? false : "visible"}
            transition={{
              staggerChildren: 0.2,
              delayChildren: 0.1,
            }}
          >
            <HeadingOne text={heading} subtext={subtext} />
            {primaryCTA && (
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                variants={itemVariants}
              >
                <ButtonNormal
                  label={primaryCTA.label}
                  href={primaryCTA.href}
                  icon={false}
                />
                {secondaryCTA && (
                  <ButtonText
                    label={secondaryCTA.label}
                    href={secondaryCTA.href}
                    icon={true}
                  />
                )}
              </motion.div>
            )}
          </motion.div>
      </div>
    </div>
  )
}