
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-[0.2em] gold-gradient">MARATHON</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Marathon is a leading luxury brand specializing in high-end shoes and bags. Our commitment to quality and elegance makes us the choice of icons worldwide.
            </p>
            <div className="flex space-x-4">
              {[MessageCircle, Share2, Globe].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#d4af37' }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-yellow-500 transition-colors">Collections</a></li>
              <li><a href="#shoes" className="hover:text-yellow-500 transition-colors">Luxury Shoes</a></li>
              <li><a href="#bags" className="hover:text-yellow-500 transition-colors">Designer Bags</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span>+91 7208757846</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span>concierge@marathon.luxury</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span>Mumbai, Delhi, Bangalore</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button className="gold-bg text-black text-xs font-bold uppercase tracking-widest py-2 hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Marathon Luxurious. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
