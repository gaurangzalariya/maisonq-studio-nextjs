'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

interface ResponsiveCardProps {
  title: string
  description: string
  image?: string
  href?: string
  className?: string
}

export default function ResponsiveCard({ 
  title, 
  description, 
  image, 
  href, 
  className = '' 
}: ResponsiveCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 20 : 30,
      scale: isMobile ? 0.98 : 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const hoverVariants = {
    hover: {
      y: isMobile ? -2 : -5,
      scale: isMobile ? 1.02 : 1.05,
    },
    tap: {
      scale: 0.98,
    }
  }

  const CardContent = () => (
    <motion.div
      className={`
        max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:flex-row bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden
        p-4                    // Mobile: compact padding
        sm:p-6              // Small: more padding
        md:p-8              // Medium: spacious padding
        lg:hover:shadow-lg               // Large: enhanced hover shadow
        transition-shadow duration-300   // Smooth shadow transition
        ${className}
      `}
      variants={cardVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? false : "visible"}
      whileHover={shouldReduceMotion ? undefined : "hover"}
      whileTap={shouldReduceMotion ? undefined : "tap"}
      transition={{
        duration: isMobile ? 0.3 : 0.6,
        ease: isMobile ? "easeOut" : "easeInOut"
      }}
      style={{ touchAction: 'manipulation' }} // Prevent 300ms delay
    >
      {image && (
        <div className="
          w-full lg:w-1/2 aspect-video md:aspect-retro rounded-md overflow-hidden bg-gray-100 relative
        ">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className='w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4'>
      <h3 className="
        font-secondary text-2xl font-semibold text-gray-900 leading-tight
        lg:text-4xl                      // Large: max size
      ">
        {title}
      </h3>
      
      <p className="
        text-sm text-gray-600 leading-relaxed
        sm:text-lg                     // Small: readable size
      ">
        {description}
      </p>
      
      {href && (
        <motion.div
        className='mt-4'
          whileHover={shouldReduceMotion ? undefined : { x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="
            inline-flex items-center rounded-md bg-[#938f8a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs
          ">
            Learn more <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />
          </span>
        </motion.div>
      )}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className="block min-h-[44px] min-w-[44px]" // Touch-friendly minimum size
        variants={hoverVariants}
        whileHover={shouldReduceMotion ? undefined : "hover"}
        whileTap={shouldReduceMotion ? undefined : "tap"}
      >
        <CardContent />
      </motion.a>
    )
  }

  return <CardContent />
} 