'use client';

import { motion, easeInOut, useReducedMotion } from 'framer-motion';
import { MoveRight, LucideIcon } from 'lucide-react';

type Service = {
  label: string;
  icon: LucideIcon;
};

type ServiceListSectionProps = {
  title?: string;
  intro?: string;
  subIntro?: string;
  services: Service[];
  className?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

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

export default function ServiceListSection({
  title = 'Our Expertise Includes:',
  intro,
  subIntro,
  services,
  className = '',
}: ServiceListSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className={`text-center px-6 py-24 sm:py-32 max-w-7xl mx-auto lg:py-40 ${className}`}>
      {intro && (
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {intro}
        </motion.p>
      )}

      {subIntro && (
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subIntro}
        </motion.p>
      )}

      <motion.h4
        className="text-4xl font-secondary font-semibold mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h4>

      <motion.ul
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-12 text-left max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map(({ label, icon: Icon }, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start space-x-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Icon className="w-8 h-8 text-[#938f8a] mt-1 flex-shrink-0" />
            <span className="text-lg">{label}</span>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="mt-14 flex items-center justify-center gap-x-6"
        variants={itemVariants}
      >
        <motion.a
          href="/contact"
          className="rounded-md bg-gray-900 px-5.5 py-2.5 text-lg font-semibold text-white shadow-xs"
          variants={buttonVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={shouldReduceMotion ? undefined : 'hover'}
          whileTap={shouldReduceMotion ? undefined : 'tap'}
        >
          Book Free Audit <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}