
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Alexandra Wright",
    role: "Fashion Blogger",
    content: "The quality of the Emerald Stilettos is unmatched. I've worn them to three galas now, and I always get asked where I got them. Marathon is my new favorite secret.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Creative Director",
    content: "The Noir Luxe Handbag is a masterpiece. The leather is buttery soft, and the attention to detail in the hardware is something you usually only find in Paris boutiques.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Elena Rossi",
    role: "Interior Designer",
    content: "Service is as premium as the products. The WhatsApp ordering was seamless, and my bag arrived beautifully packaged. Truly a luxury experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-[#111] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-yellow-600/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-yellow-600/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="gold-gradient">Elite Clients</span> Say</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md p-8 border border-white/5 relative group hover:border-yellow-500/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 group-hover:text-yellow-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-yellow-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
