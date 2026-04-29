
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Emerald Enigma Stilettos",
    category: "Shoes",
    price: "$850",
    image: "/images/shoe-1.jpg",
    description: "Premium emerald green high heels with crystal embellishments."
  },
  {
    id: 2,
    name: "Noir Luxe Handbag",
    category: "Bags",
    price: "$1,200",
    image: "/images/bag-1.jpg",
    description: "Signature black leather handbag with gold accents."
  },
  {
    id: 3,
    name: "Midnight Clutch",
    category: "Bags",
    price: "$950",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    description: "Elegant evening clutch for the sophisticated woman."
  },
  {
    id: 4,
    name: "Golden Hour Pumps",
    category: "Shoes",
    price: "$780",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    description: "Stunning golden pumps for unforgettable evenings."
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-[#111] border border-white/5 overflow-hidden"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a 
          href="https://wa.me/7208757846"
          className="bg-white text-black p-4 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
        >
          <ShoppingBag className="w-6 h-6" />
        </a>
      </div>
    </div>
    
    <div className="p-6">
      <span className="text-xs tracking-widest text-yellow-500 uppercase mb-2 block">{product.category}</span>
      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-1">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">{product.price}</span>
        <a 
          href="https://wa.me/7208757846"
          className="text-xs uppercase tracking-widest border-b border-yellow-500 pb-1 flex items-center gap-2"
        >
          Order Now <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  </motion.div>
);

const ProductSection = () => {
  return (
    <section id="collections" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The <span className="gold-gradient">Signature</span> Selection</h2>
            <p className="text-gray-400 max-w-xl">
              Curated for the bold and the beautiful. Each piece in our collection is a testament to timeless craftsmanship and modern design.
            </p>
          </div>
          <motion.a 
            href="#shoes"
            whileHover={{ x: 10 }}
            className="hidden md:flex items-center gap-2 text-yellow-500 uppercase tracking-widest text-sm mt-4 md:mt-0"
          >
            View All Collections <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
