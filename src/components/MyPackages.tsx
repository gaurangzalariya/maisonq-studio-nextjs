'use client'

import { motion, Variants } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, CreditCard, TrendingUp, BarChart } from 'lucide-react';
import HeadingThree from './UI/HeadingThree';
import React from 'react';

interface PackageItem {
  label: string;
  value: string;
  icon: React.ReactElement;
}

interface PackageData {
  title: string;
  icon: React.ReactElement;
  description: string;
  list: PackageItem[];
  outro: string;
  ctaText: string;
  ctaLink: string;
  popular: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const MyPackages = () => {
  const packages: PackageData[] = [
    {
      title: 'Hourly Packages',
      icon: <Clock className="w-8 h-8 text-primary" />,
      description:
        'We work on a flexible hour-based model designed for growing brands. Purchase a block of hours (from 5 to 40) and use them over 90 days—no strings, no retainers.',
      list: [
        {
          label: 'Buy only what you need',
          value: 'Choose from 5, 10, 20, or 40-hour packages',
          icon: <CreditCard className="w-5 h-5" />
        },
        {
          label: 'Use within 90 days',
          value:
            'Ideal for website tweaks, CRO tasks, new features, or designs',
          icon: <Clock className="w-5 h-5" />
        },
        {
          label: 'Track every minute',
          value: 'Weekly report showing hours used and your balance',
          icon: <BarChart className="w-5 h-5" />
        },
        {
          label: 'No hidden fees',
          value: 'One-time payment, pay-as-you-go model',
          icon: <CheckCircle className="w-5 h-5" />
        },
      ],
      outro:
        "We'll work based on your requests, provide regular updates, and deliver high-quality work at your pace.",
      ctaText: 'Get Started with Hourly',
      ctaLink: '/contact',
      popular: false
    },
    {
      title: 'Growth-Based Partnership',
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      description:
        "Prefer to align our success with yours? For select clients, we offer a performance-based model where our compensation is tied to your store's revenue growth.",
      list: [
        { 
          label: 'Zero Risk Start',
          value: 'No upfront cost—ideal for high-potential brands',
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          label: 'Full Service',
          value:
            'We partner deeply, handling CRO, UX, performance & features',
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          label: 'Success-Based',
          value:
            'Compensation based on agreed percentage of monthly sales',
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          label: 'Data-Driven',
          value:
            'Best suited for stores with consistent traffic and sales data',
          icon: <CheckCircle className="w-5 h-5" />
        },
      ],
      outro:
        'Note: This model is available by application only and subject to approval.',
      ctaText: 'Apply Now',
      ctaLink: '/contact',
      popular: true
    },
  ];

  return (
    <section className="px-6 py-24 sm:py-32 lg:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <HeadingThree 
            heading="Partnerships, Built Around You" 
            subtext="Choose a working model that aligns with how you scale best."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={cardVariants}
              className={`
                relative rounded-2xl p-8 bg-white shadow-lg border border-gray-100
                hover:shadow-xl transition-shadow duration-300
                ${pkg.popular ? 'ring-2 ring-primary' : ''}
              `}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                {pkg.icon}
                <h3 className="text-2xl font-semibold text-gray-900">{pkg.title}</h3>
              </div>

              <p className="text-lg mb-8 text-gray-600">
                {pkg.description}
              </p>

              <ul className="space-y-6 mb-8">
                {pkg.list.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-1 rounded-lg bg-primary/10">
                      {item.icon}
                    </div>
                    <div>
                      {item.label && (
                        <span className="block font-medium text-gray-900 mb-1">
                          {item.label}
                        </span>
                      )}
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-sm italic text-gray-500 mb-8">
                {pkg.outro}
              </p>

              <motion.a
                href={pkg.ctaLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2
                  ${pkg.popular 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }
                  transition-colors duration-200 font-medium
                `}
              >
                {pkg.ctaText}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyPackages;