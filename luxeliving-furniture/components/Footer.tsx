import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 text-white group">
              <ShoppingBag className="w-8 h-8 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-2xl font-serif font-bold tracking-tight">
                LUXE<span className="text-emerald-500">LIVING</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Crafting elegance for your home since 1998. Premium furniture for modern living.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-stone-800 rounded-xl hover:bg-emerald-600 transition-all duration-300 text-white hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-xl hover:bg-emerald-600 transition-all duration-300 text-white hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/20">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-stone-800 rounded-xl hover:bg-emerald-600 transition-all duration-300 text-white hover:scale-110 hover:shadow-lg hover:shadow-emerald-600/20">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2">Home</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors flex items-center gap-2">Browse Products</Link></li>
              <li><Link to="/custom-order" className="hover:text-emerald-400 transition-colors flex items-center gap-2">Custom Designs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/category/bedroom" className="hover:text-emerald-400 transition-colors">Living Room</Link></li>
              <li><Link to="/category/bedroom" className="hover:text-emerald-400 transition-colors">Bedroom Set</Link></li>
              <li><Link to="/category/dining" className="hover:text-emerald-400 transition-colors">Dining Tables</Link></li>
              <li><Link to="/category/office" className="hover:text-emerald-400 transition-colors">Office Space</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>0314-3912774</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>imadahamd81@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} LuxeLiving Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
