
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Instagram, Facebook } from 'lucide-react'
import logo from "../assets/logo.jpg"

const navItems = [
  { label: "CATEGORIES", href: "#", hasDropdown: true },
  { label: "HOME", href: "#" },
  { label: "SHOP", href: "#" },
  { label: "CART", href: "#" },
  { label: "CHECKOUT", href: "#" },
  { label: "MY ACCOUNT", href: "#" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden sm:block bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm py-2"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.a 
              href="#" 
              className="flex items-center hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="w-4 h-4 mr-1" />
              100k Followers
            </motion.a>
            <motion.a 
              href="#" 
              className="flex items-center hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Facebook className="w-4 h-4 mr-1" />
              300k Followers
            </motion.a>
          </div>
          <div className="flex items-center space-x-4">
            <motion.span 
              className="bg-black text-white px-2 py-0.5 rounded-full text-xs font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Hot
            </motion.span>
            <span className="text-black text-sm font-medium">Free Express Shipping on orders $200+</span>
          </div>
        </div>
      </motion.div>
      
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex-shrink-0"
          >
            <a href="/" className="block">
              <img
                src={logo}
                alt="SentioCommerce"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </a>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="hidden md:block flex-1 max-w-2xl mx-4"
          >
            <div className="relative flex">
              <div className="inset-y-0 left-0 flex items-center">
                <select className="h-full rounded-l-full border-2 border-r-0 border-amber-300 bg-transparent py-0 pl-3 pr-7 text-gray-900 focus:ring-2 focus:ring-amber-500 text-sm">
                  <option>All Categories</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Search products"
                className={`block w-full rounded-r-full border-2 border-l-0 border-amber-300 py-2.5 pr-12 pl-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${searchFocused ? 'shadow-lg' : 'shadow-sm'}`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <motion.div 
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                whileHover={{ scale: 1.1 }}
              >
                <Search className="h-5 w-5 text-amber-500 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex items-center space-x-4"
          >
            <motion.a 
              href="/account" 
              className="p-2 hover:text-amber-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <User className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="/cart" 
              className="p-2 hover:text-amber-500 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
            >
              <ShoppingCart className="h-6 w-6" />
              <motion.span 
                className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                0
              </motion.span>
            </motion.a>
            <motion.button
              className="md:hidden p-2 hover:text-amber-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {(isMenuOpen || !isMenuOpen) && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-black text-white ${isMenuOpen ? 'block' : 'hidden md:block'}`}
          >
            <div className="container mx-auto px-4">
              <ul className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 py-2 md:py-0">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full md:w-auto relative group"
                  >
                    <a 
                      href={item.href}
                      className="flex items-center justify-center md:justify-start py-2 px-4 md:py-4 md:px-2 hover:bg-amber-500 hover:text-white transition-all duration-300 rounded-md group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </a>
                    {item.hasDropdown && (
                      <motion.div 
                        className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors duration-300">Subcategory 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors duration-300">Subcategory 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors duration-300">Subcategory 3</a>
                      </motion.div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Search Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:hidden p-4 bg-gray-100"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            className="block w-full rounded-full border-2 border-amber-300 py-2 pl-4 pr-10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 shadow-sm focus:shadow-lg transition-all duration-300"
          />
          <motion.div 
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            whileHover={{ scale: 1.1 }}
          >
            <Search className="h-5 w-5 text-amber-500 cursor-pointer" />
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

