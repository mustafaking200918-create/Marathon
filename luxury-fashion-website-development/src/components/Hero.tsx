
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="/images/hero.jpg" 
            alt="Luxury Marathon Collection" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="uppercase tracking-[0.5em] text-sm text-yellow-500 mb-4 block">
            Defining Elegance Since 1998
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Elevate Your <br />
            <span className="gold-gradient italic">Lifestyle</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 font-light tracking-wide">
            Discover the ultimate collection of handcrafted luxury shoes and designer bags. Marathon brings you the pinnacle of fashion and comfort.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="https://wa.me/7208757846"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 gold-bg text-black font-bold tracking-widest uppercase text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              Order Now
            </motion.a>
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/30 backdrop-blur-sm text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all"
            >
              Explore Collection
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-yellow-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
