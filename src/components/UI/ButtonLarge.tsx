'use client'

import { MoveRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const buttonVariants = {
    initial: {
        scale: 1
    },
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.95
    }
}

export interface ButtonLargeProps {
    label: string
    href: string
    icon: boolean
}

export default function ButtonLarge({
    label,
    href,
    icon,
}: ButtonLargeProps) {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.a 
            href={href} 
            className={`rounded-md bg-[#938f8a] text-white px-5.5 py-3 text-lg font-semibold shadow-sm`}
            variants={buttonVariants}
            initial="initial"
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={shouldReduceMotion ? undefined : 'hover'}
            whileTap={shouldReduceMotion ? undefined : 'tap'}
        >
            {label} {icon && <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />}
        </motion.a>
    )
}