import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const branches = [
  { city: "Mumbai", address: "Colaba Causeway, Luxury Hub", phone: "7208757846" },
  { city: "Delhi", address: "DLF Emporio, Vasant Kunj", phone: "7208757846" },
  { city: "Bangalore", address: "UB City, Vittal Mallya Rd", phone: "7208757846" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/interior.jpg" 
                alt="Marathon Boutique Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-yellow-500/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our <span className="gold-gradient">Legacy</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Marathon was founded on the principle that luxury should be an experience, not just a purchase. Each of our products is crafted by artisans who have spent decades perfecting their trade.
            </p>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Exclusive Branches</h3>
              {branches.map((branch, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border-l-2 border-yellow-500 bg-white/5">
                  <MapPin className="w-6 h-6 text-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">{branch.city}</h4>
                    <p className="text-gray-500 text-sm">{branch.address}</p>
                    <p className="text-yellow-500/80 text-xs mt-1 uppercase tracking-widest">{branch.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
