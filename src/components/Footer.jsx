'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Youtube, ArrowRight, Mail } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Find It Fast Column */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="font-bold text-xl mb-6 text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">FIND IT FAST</h3>
          <ul className="space-y-3">
            {['About Us', 'Top Searches', 'Privacy Policy', 'Terms and Conditions', 'Testimonials'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5, color: '#F59E0B' }}
                className="cursor-pointer transition-colors duration-300 hover:text-amber-500"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Care Column */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="font-bold text-xl mb-6 text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">CUSTOMER CARE</h3>
          <ul className="space-y-3">
            {['My Account', 'Track Order', 'Shop', 'Wishlist', 'Returns/Exchange'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5, color: '#F59E0B' }}
                className="cursor-pointer transition-colors duration-300 hover:text-amber-500"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Other Business Column */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="font-bold text-xl mb-6 text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">OTHER BUSINESS</h3>
          <ul className="space-y-3">
            {['Partnership Programs', 'Associate Program', 'Wholesale Socks', 'Wholesale Funny Socks'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5, color: '#F59E0B' }}
                className="cursor-pointer transition-colors duration-300 hover:text-amber-500"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Column */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="font-bold text-xl mb-6 text-amber-800 border-b-2 border-amber-300 pb-2 inline-block">NEWSLETTER</h3>
          <div className="space-y-4">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-full focus:outline-none focus:border-amber-500 transition-colors duration-300"
              />
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#F59E0B' }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-400 text-white p-2 rounded-full transition-colors duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <p className="text-sm text-gray-600">
              * By signing up, you agree to receive SentioCommerce's email newsletter.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: '#' },
                { icon: <Facebook className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
                { icon: <Youtube className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ y: -2, color: '#F59E0B' }}
                  href={social.href}
                  className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="mt-12 pt-8 border-t border-amber-200 text-center text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; 2023 SentioCommerce. All rights reserved.</p>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-amber-300 rounded-full opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </footer>
  )
}

