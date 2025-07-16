'use client';

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';

const getPlatformIcon = (platform: string) => {
  const iconMap: Record<string, string> = {
    LinkedIn: '/linkedin-icon.svg',
    Upwork: '/upwork-icon.svg',
  };
  return iconMap[platform] || '';
};

const getRandomAvatar = (gender: string) => {
  // Number of available avatars for each gender
  const maxNumber = 4;
  // Generate random number between 1 and maxNumber
  const randomNum = Math.floor(Math.random() * maxNumber) + 1;
  
  if (gender === 'female') {
    return `/avtar-women-${randomNum}.svg`;
  }
  return `/avtar-men-${randomNum}.svg`;
};

// Add console log to debug avatar paths
const debugAvatarPaths = (avatarMap: Record<string, string>) => {
  console.log('Avatar Paths:', avatarMap);
};

const testimonialData = [
    {
      body: [
        "MaisonQ Studio completely changed my perception of working with Shopify experts. Gaurang brought not just deep technical expertise but also a sense of ownership and precision to every task.",
        "From complex custom features to plugin integrations, every solution was delivered with clarity, speed, and care. There was never a question he couldn't answer or a problem he couldn't solve within hours.",
        "After several disappointing experiences with other developers, this collaboration restored my confidence. A rare and reliable partner in every sense.",
      ],
      featured: true,
      author: {
        name: 'Jakub M',
        gender: 'male',
        platform: 'Upwork',
      },
    },
    {
      body:
        "Working with Gaurang through MaisonQ Studio has been a masterclass in development precision. His attention to both form and function-across frontend and backend-makes him a standout collaborator. Reliable, focused, and always a step ahead.",
      author: {
        name: 'Elise H',
        gender: 'female',
        platform: 'LinkedIn',
      },
    },
    {
      body:
        "Gaurang is more than just a developer-he's a strategic partner. He anticipates needs before they're expressed, tackles challenges with confidence, and ensures every deliverable supports long-term success. Our collaboration felt effortless and highly effective.",
      author: {
        name: 'Preston M',
        gender: 'male',
        platform: 'LinkedIn',
      },
    },
    {
      body:
        "For over three years, MaisonQ Studio has been a trusted extension of our team. Gaurang is responsive, thoughtful, and calm under pressure-traits that matter when you're building something that needs to last. Beyond the code, he's become a friend and a go-to partner.",
      author: {
        name: 'Lewis D',
        gender: 'male',
        platform: 'LinkedIn',
      },
    },
    {
      body:
        "At Fan & Fuel, we collaborated with Gaurang on several high-impact projects. He consistently delivered elegant, scalable solutions with a positive, team-first attitude. His work reflects experience, care, and great instincts. I continue to work with him to this day.",
      author: {
        name: 'Joel R',
        gender: 'male',
        platform: 'LinkedIn',
      },
    },
    {
      body:
        "From day one, Gaurang has gone above and beyond. His consistency, professionalism, and ability to deliver high-quality work on time make him an invaluable development partner. I wouldn't hesitate to recommend his services to any brand serious about growth.",
      author: {
        name: 'Elijah S',
        gender: 'male',
        platform: 'LinkedIn',
      },
    },
    {
      body:
        "We had a time-sensitive task, and Gaurang delivered precisely when needed-even across time zones. His commitment and responsiveness made a real difference.",
      author: {
        name: 'Pesach G',
        gender: 'male',
        platform: 'Upwork',
      },
    },
    {
      body:
        "Gary completed our Shopify task in half the estimated time with full attention to detail. His communication was seamless, and working with him felt effortless. We'd gladly collaborate again.",
      author: {
        name: 'Nigel C',
        gender: 'male',
        platform: 'Upwork',
      },
    },
    {
      body:
        "As Shopify beginners, we needed someone who could bring our ideas to life-and Gaurang did just that. He listened carefully, offered helpful suggestions, and built exactly what we needed.",
      author: {
        name: 'Kristin K',
        gender: 'female',
        platform: 'Upwork',
      },
    },
    {
      body:
        "I would hire Gary again in a heartbeat. His work is precise, fast, and rooted in clear communication. Truly a trusted member of the Upwork community.",
      author: {
        name: 'Chris S',
        gender: 'male',
        platform: 'Upwork',
      },
    },
    {
      body:
        "Gary is easy to communicate with, takes feedback graciously, and checks in regularly to ensure alignment. A reliable professional you can count on.",
      author: {
        name: 'Keaton T',
        gender: 'male',
        platform: 'Upwork',
      },
    },
    {
      body:
        "We brought Gaurang in for improvements to our site and were thrilled with the results. He worked quickly, suggested smart solutions, and communicated clearly. He's now our go-to developer for ongoing needs, from Mailchimp to forms.",
      author: {
        name: 'Heather N',
        gender: 'female',
        platform: 'Upwork',
      },
    },
    {
      body:
        "MaisonQ Studio has been a game changer for our Shopify needs. Gaurang consistently delivers top-notch work, always meets deadlines, and has become a vital partner in growing our store.",
      author: {
        name: 'Calgary',
        gender: 'female',
        platform: 'Upwork',
      },
    },
];  

export default function TestimonialGrid() {
  const [featuredTestimonial, setFeaturedTestimonial] = useState<(typeof testimonialData)[0] | null>(null);
  const [regularTestimonials, setRegularTestimonials] = useState<typeof testimonialData>([]);
  const [avatarMap, setAvatarMap] = useState<Record<string, string>>({});

  useEffect(() => {
    // Generate random avatars for each testimonial
    const avatars = testimonialData.reduce((acc, testimonial) => {
      acc[testimonial.author.name] = getRandomAvatar(testimonial.author.gender);
      return acc;
    }, {} as Record<string, string>);
    
    // Debug avatar paths
    debugAvatarPaths(avatars);
    setAvatarMap(avatars);

    // First shuffle all testimonials
    const shuffled = [...testimonialData].sort(() => Math.random() - 0.5);
    // Find the first featured testimonial
    const featured = shuffled.find(t => t.featured);
    // Get the rest of the testimonials
    const regular = shuffled.filter(t => t !== featured);
    
    setFeaturedTestimonial(featured || null);
    setRegularTestimonials(regular);
  }, []);

  if (!featuredTestimonial) return null;

  return (
    <div className="relative isolate py-24 sm:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-1/2 bg-gradient-to-tr from-[#f8f8f8]/30 to-[#938f8a]/30 opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Words from Our Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl font-secondary font-semibold tracking-tight text-balance sm:text-6xl"
          >
            Echoes your partnership-first mindset.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <figure className="relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
            <blockquote className="text-gray-900">
              <div className="flex items-center gap-x-2 text-sm mb-6">
                <NextImage
                  src={avatarMap[featuredTestimonial.author.name] || '/avtar-men-1.svg'}
                  alt={`Avatar of ${featuredTestimonial.author.name}`}
                  width={108}
                  height={108}
                  className="h-16 w-16 rounded-full bg-gray-50"
                  priority
                />
                <div>
                  <div className="font-semibold text-lg">{featuredTestimonial.author.name}</div>
                  <div className="flex items-center gap-2 text-gray-600">
                    {getPlatformIcon(featuredTestimonial.author.platform) && (
                      <NextImage
                        src={getPlatformIcon(featuredTestimonial.author.platform)}
                        alt={`${featuredTestimonial.author.platform} icon`}
                        width={16}
                        height={16}
                        className="inline-block"
                      />
                    )}
                    <span>{featuredTestimonial.author.platform}</span>
                  </div>
                </div>
              </div>
              {Array.isArray(featuredTestimonial.body) ? (
                <div className="space-y-4">
                  {featuredTestimonial.body.map((paragraph, idx) => (
                    <p key={idx} className="text-lg font-medium italic leading-8">
                      &ldquo;{paragraph}&rdquo;
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg font-medium italic leading-8">&ldquo;{featuredTestimonial.body}&rdquo;</p>
              )}
            </blockquote>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-gray-50"></div>
          </figure>
        </motion.div>

        {/* Regular Testimonials Grid */}
        <div className="mx-auto mt-16 flow-root max-w-7xl sm:mt-20">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:text-[0]">
            {regularTestimonials.map((testimonial, testimonialIdx) => (
              <motion.div
                key={testimonial.author.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: testimonialIdx * 0.1
                }}
                className="relative break-inside-avoid pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-white p-6 text-sm leading-6 shadow-xl ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    {Array.isArray(testimonial.body) ? (
                      <div className="space-y-4">
                        {testimonial.body.map((paragraph, idx) => (
                          <p key={idx} className="text-base font-medium italic">
                            &ldquo;{paragraph}&rdquo;
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base font-medium italic">&ldquo;{testimonial.body}&rdquo;</p>
                    )}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-2 border-t border-gray-900/10 pt-4">
                    <NextImage
                      src={avatarMap[testimonial.author.name] || '/avtar-men-1.svg'}
                      alt={`Avatar of ${testimonial.author.name}`}
                      width={64}
                      height={64}
                      className="h-12 w-12 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author.name}</div>
                      <div className="flex items-center gap-2 text-gray-600">
                        {getPlatformIcon(testimonial.author.platform) && (
                          <NextImage
                            src={getPlatformIcon(testimonial.author.platform)}
                            alt={`${testimonial.author.platform} icon`}
                            width={16}
                            height={16}
                            className="inline-block"
                          />
                        )}
                        <span>{testimonial.author.platform}</span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}