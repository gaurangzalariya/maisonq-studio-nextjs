'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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

export interface HeadingTwoProps {
    heading: string
    subtext: string
}

export default function HeadingTwo({
    heading,
    subtext,
}: HeadingTwoProps) {
    const [cleanHTML, setCleanHTML] = useState(subtext)

    useEffect(() => {
        const sanitizeHTML = async () => {
            const DOMPurify = (await import('dompurify')).default;
            setCleanHTML(DOMPurify.sanitize(subtext));
        };
        sanitizeHTML();
    }, [subtext]);

    return (
        <>
            <motion.h2 
                className="text-4xl font-secondary font-semibold tracking-tight text-balance sm:text-6xl"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {heading}
            </motion.h2>
            {subtext && (
            <motion.div 
                className="text-lg font-medium text-pretty sm:text-xl/8"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, ease: "easeOut" }}
                    dangerouslySetInnerHTML={{ __html: cleanHTML }}
                />
            )}
        </>
    )
}