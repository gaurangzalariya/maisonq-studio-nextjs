'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MoveRight } from 'lucide-react'

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

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
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
            <motion.h1
              className="text-5xl font-secondary font-semibold tracking-tight text-balance sm:text-9xl"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl mt-8 text-lg font-medium text-pretty sm:text-xl/8"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {subtext}
            </motion.p>
            {primaryCTA && (
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                variants={itemVariants}
              >
                <motion.a
                  href={primaryCTA.href}
                  className={`rounded-md ${styling?.primaryCTABackgroundColor ? `${styling.primaryCTABackgroundColor}` : 'bg-indigo-600'} px-3.5 py-2.5 text-sm font-semibold ${styling?.primaryCTATextColor ? `${styling.primaryCTATextColor}` : 'text-white'} shadow-xs`}
                  variants={buttonVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={shouldReduceMotion ? undefined : 'hover'}
                  whileTap={shouldReduceMotion ? undefined : 'tap'}
                >
                  {primaryCTA.label} <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />
                </motion.a>
                {secondaryCTA && (
                  <motion.a
                    href={secondaryCTA.href}
                    className="text-sm/6 font-semibold"
                    variants={buttonVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  >
                    {secondaryCTA.label} <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </motion.div>
      </div>
    </div>
  )
}