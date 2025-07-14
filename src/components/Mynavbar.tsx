'use client'

import { useState, useRef } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Palette, 
  ShoppingBag,
  FileCode,
  ChevronDown 
} from 'lucide-react'
import { ButtonText, ButtonLarge } from './UI/UI'

import logo from '../../public/logo.png'

const services = [
  {
    name: 'Shopify Development',
    description: 'Custom themes and e-commerce solutions',
    href: '/services/shopify-development',
    icon: ShoppingBag
  },
  {
    name: 'WordPress Development',
    description: 'Custom CMS and website solutions',
    href: '/services/wordpress-development',
    icon: FileCode
  },
  {
    name: 'Design Partnerships',
    description: 'Custom design systems and UI/UX solutions',
    href: '/services/design-partnerships',
    icon: Palette
  },
]

const navigation = [
  { name: 'Packages', href: '/packages' },
  { name: 'About', href: '/about' },
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
  const [isHovering, setIsHovering] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setIsHovering(false), 150)
  }

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    setIsHovering(true)
  }

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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PopoverButton 
                  className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <Link 
                    href="/services"
                    className="hover:text-gray-600 transition-colors"
                  >
                    Services
                  </Link>
                  <ChevronDown 
                    className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                    aria-hidden="true" 
                  />
                </PopoverButton>
                <AnimatePresence>
                  {(open || isHovering) && (
                    <PopoverPanel
                      static
                      className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                      <div className="p-4">
                        <div className="grid">
                          {services.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm/6 hover:bg-[#edecea] transition duration-150 ease-in-out cursor-pointer"
                            >
                              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="size-6 text-gray-600 group-hover:text-gray-900" aria-hidden="true" />
                              </div>
                              <div className="flex-auto">
                                <Link
                                  href={item.href}
                                  className="block font-semibold text-gray-900"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </Link>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </PopoverPanel>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Popover>
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonText
            label="Contact Today"
            href="/contact"
            icon={true}
          />
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
                      {/* Services section in mobile menu */}
                      <div className="space-y-2">
                        <Link
                          href="/services"
                          className="block text-base/7 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Services
                        </Link>
                        {services.map((item, index) => (
                          <motion.div
                            key={item.name}
                            variants={shouldReduceMotion ? {} : navigationItemVariants}
                            transition={{ duration: 0.3, ease: "easeOut" as const, delay: (navigation.length + index) * 0.1 }}
                          >
                            <Link
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50 min-h-[44px] transition-colors duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex items-center">
                                <item.icon className="size-5 text-gray-600" aria-hidden="true" />
                                <div className="ml-3">
                                  <p className="text-base/7 font-semibold text-gray-900">{item.name}</p>
                                  <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="py-6"
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
                      <motion.div
                          key="contact"
                          className="flex mt-6"
                          variants={shouldReduceMotion ? {} : navigationItemVariants}
                          transition={{ duration: 0.3, ease: "easeOut" as const, delay: (navigation.length + services.length) * 0.1 }}
                        >
                        <ButtonLarge
                          label="Contact Today"
                          href="/contact"
                          icon={true}
                        />
                      </motion.div>
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