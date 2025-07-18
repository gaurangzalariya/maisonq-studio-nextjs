'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseStudyOverview } from '@/types/case-study';
import SanitizedHtml from '@/components/SanitizedHtml';
import PageHero from '@/components/PageHero';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface Props {
  caseStudies: CaseStudyOverview[];
}

export default function CaseStudiesClient({ caseStudies }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        heading="Our Case Studies"
        subtext="Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals."
        styling={{
            backgroundColor: "bg-[#edecea]",
            textColor: "text-gray-900",
        }}
      />

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={fadeInUp}
                className="group"
              >
                <Link href={`/case-studies/${study.slug}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:transform group-hover:scale-105">
                    <div className="relative aspect-retro">
                      <Image
                        src={study.thumbnailImage}
                        alt={study.title}
                        fill
                        className="object-cover"
                        unoptimized={study.thumbnailImage.startsWith('http')}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <SanitizedHtml 
                        html={study.description} 
                        className="text-gray-700 mb-4 prose prose-sm" 
                      />
                      <div className="flex flex-col gap-4">
                        <p className='text-gray-600 prose prose-sm'>{study.clientName} - {study.industry}</p>
                        <div className="flex gap-2 flex-wrap">
                          {study.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 