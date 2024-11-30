import { motion } from 'framer-motion'
import { Star } from 'lucide-react'


export default function ProductCard({ title, price, image, rating, isNew, isOnSale }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: "tween" }}
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">New</span>
        )}
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-black mb-2 flex-grow">{title}</h3>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
      <p className="text-2xl font-bold text-black mb-4">${price}</p>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Add to Cart
      </motion.button>
    </motion.div>
  )
}