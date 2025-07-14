'use client'

import { motion } from 'framer-motion'

const itemVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

export interface HeadingOneProps {
    text: string
    subtext: string
}

export default function HeadingOne({
    text,
    subtext,
}: HeadingOneProps) {
    return (
        <>
            <motion.h1 
                className="text-5xl font-secondary font-semibold tracking-tight text-balance sm:text-9xl"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {text}
            </motion.h1>
            <motion.p 
                className="mx-auto max-w-2xl mt-8 text-lg font-medium text-pretty sm:text-xl/8"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {subtext}
            </motion.p>
        </>
    )
}