import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black  border-t text-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="-black font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Press
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="-black font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Returns
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="-black font-semibold mb-4">Privacy & Terms</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="-gray-600 hover:-black">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="-black font-semibold mb-4">Newsletter</h3>
            <p className="-gray-600 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-black -white rounded-r-md hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="-center -gray-600">
            © {new Date().getFullYear()} Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}