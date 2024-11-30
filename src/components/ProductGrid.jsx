import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import img1 from "../assets/1.jpeg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpeg"
import img5 from "../assets/5.jpeg"
import img6 from "../assets/6.jpeg"

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 199.99,
    image: img1 , 
    rating: 4.5,
    isNew: true
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 299.99,
    image: img2 ,
    rating: 4.2
  },
  {
    id: 3,
    title: "Laptop",
    price: 999.99,
    image: img3 , 
    rating: 4.8,
    isOnSale: true
  },
  {
    id: 4,
    title: "Smartphone",
    price: 799.99,
    image: img4
  },
  {
    id: 5,
    title: "Tablet",
    price: 499.99,
    image: img5 , 
    rating: 4.6
  },
  {
    id: 6,
    title: "Camera",
    price: 699.99,
    image: img6 , 
    rating: 4.3,
    isNew: true
  }
]

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-black mb-8 text-center"
    >
      Featured Products
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating}
          isNew={product.isNew}
          isOnSale={product.isOnSale}
        />
      ))}
    </div>
  </section>
  )
}