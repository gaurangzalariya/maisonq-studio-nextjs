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

export interface HeadingThreeProps {
    heading: string
    subtext: string
}

export default function HeadingThree({
    heading,
    subtext,
}: HeadingThreeProps) {
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
            <motion.h3 
                className="text-3xl font-secondary font-semibold tracking-tight text-balance sm:text-5xl"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {heading}
            </motion.h3>
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