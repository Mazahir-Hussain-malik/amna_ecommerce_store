import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react'
import logo from "../assets/logo.jpg";
 function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-black">
          <img  src={logo} alt='logo' className=' w-[100px]'/>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/categories" className="text-black hover:text-gray-600">
              Categories
            </a>
            <a href="/deals" className="text-black hover:text-gray-600">
              Deals
            </a>
            <a href="/new" className="text-black hover:text-gray-600">
              What&apos;s New
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-5 w-5 text-black" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="/categories"
                className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Categories
              </a>
              <a
                href="/deals"
                className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                Deals
              </a>
              <a
                href="/new"
                className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              >
                What&apos;s New
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}



export default Navbar
