'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import logo from '../../public/logo.png'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Packages', href: '/packages' },
]

// Animation variants for mobile menu
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const mobileMenuVariants = {
  hidden: { 
    x: '100%',
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1
  },
  exit: {
    x: '100%',
    opacity: 0
  }
}

const navigationItemVariants = {
  hidden: { 
    opacity: 0,
    x: 20
  },
  visible: { 
    opacity: 1,
    x: 0
  }
}

const hamburgerVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 }
}

export default function Mynavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MaisonQ Studio</span>
            <Image 
              src={logo} 
              alt="MaisonQ Studio"
              className='h-12 w-auto' 
              priority 
              quality={90}
              loading="eager"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 min-h-[44px] min-w-[44px]"
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            transition={{ duration: 0.15 }}
            style={{ touchAction: 'manipulation' }}
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              variants={shouldReduceMotion ? {} : hamburgerVariants}
              animate={mobileMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </motion.div>
          </motion.button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact Today <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog 
            open={mobileMenuOpen} 
            onClose={setMobileMenuOpen} 
            className="lg:hidden"
            static
          >
            {/* Animated backdrop */}
            <motion.div 
              className="fixed inset-0 z-50 bg-black/20" 
              variants={shouldReduceMotion ? {} : backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
            />
            
            {/* Animated mobile menu panel */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#edecea] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              variants={shouldReduceMotion ? {} : mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
              }}
            >
              <DialogPanel>
                <motion.div 
                  className="flex items-center justify-between"
                  variants={shouldReduceMotion ? {} : navigationItemVariants}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                >
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">MaisonQ Studio</span>
                    <Image src={logo} alt="MaisonQ Studio" className='h-12 w-auto' />
                  </Link>
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 min-h-[44px] min-w-[44px]"
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span className="sr-only">Close menu</span>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </motion.div>
                  </motion.button>
                </motion.div>
                
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/20">
                    <motion.div 
                      className="space-y-2 py-6"
                      variants={shouldReduceMotion ? {} : navigationItemVariants}
                      transition={{ duration: 0.3, ease: "easeOut" as const }}
                    >
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          variants={shouldReduceMotion ? {} : navigationItemVariants}
                          transition={{ duration: 0.3, ease: "easeOut" as const, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 min-h-[44px] flex items-center transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="py-6"
                      variants={shouldReduceMotion ? {} : navigationItemVariants}
                      transition={{ duration: 0.3, ease: "easeOut" as const }}
                    >
                      <Link
                        href="/contact"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 min-h-[44px] flex items-center transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact Today <MoveRight className="inline-block ml-1 w-4 h-4" aria-hidden="true" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}