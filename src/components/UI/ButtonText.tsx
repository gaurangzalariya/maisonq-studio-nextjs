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

export interface ButtonTextProps {
    label: string
    href: string
    icon: boolean
}

export default function ButtonText({
    label,
    href,
    icon,
}: ButtonTextProps) {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.a 
            href={href} 
            className={`text-sm/6 font-semibold`}
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