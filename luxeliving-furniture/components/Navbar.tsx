import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Phone, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems: cartTotal } = useCart();
  const { totalItems: wishTotal } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'Reviews', path: '/#testimonials' },
    { name: 'Custom Order', path: '/custom-order' },
  ];

  const isActive = (path: string) => {
    if (path === '/#testimonials') return location.hash === '#testimonials';
    return location.pathname === path;
  };

  const handleReviewsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.hash = '#testimonials';
    } else {
      const el = document.getElementById('testimonials');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-stone-100' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <ShoppingBag className="w-8 h-8 text-emerald-700 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900">
              LUXE<span className="text-emerald-700">LIVING</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path === '/#testimonials' ? '/' : link.path}
                onClick={link.path === '/#testimonials' ? handleReviewsClick : undefined}
                className={`relative text-sm font-semibold transition-all duration-300 py-1 ${
                  isActive(link.path) ? 'text-emerald-700' : 'text-stone-600 hover:text-emerald-700'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
            <div className="flex items-center gap-5 border-l pl-8 border-stone-200">
              <Link to="/wishlist" className="relative text-stone-600 hover:text-emerald-700 transition-colors">
                <Heart className="w-5 h-5" />
                {wishTotal > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                    {wishTotal}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative text-stone-600 hover:text-emerald-700 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartTotal > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                    {cartTotal}
                  </span>
                )}
              </Link>
              <button className="text-stone-600 hover:text-emerald-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <a
                href="tel:03143912774"
                className="flex items-center gap-2 text-sm font-bold text-emerald-800 bg-emerald-50 px-5 py-2.5 rounded-full hover:bg-emerald-100 transition-all shadow-sm hover:shadow-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-stone-600">
              <ShoppingCart className="w-5 h-5" />
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartTotal}
                </span>
              )}
            </Link>
            <button className="text-stone-600">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-stone-100 animate-slide-up">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path === '/#testimonials' ? '/' : link.path}
                onClick={(e) => {
                  if (link.path === '/#testimonials') {
                    handleReviewsClick(e);
                  }
                  setIsOpen(false);
                }}
                className={`block px-4 py-4 text-base font-semibold border-b border-stone-50 last:border-none transition-all ${
                  isActive(link.path) ? 'text-emerald-700 bg-emerald-50/50' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4 flex gap-3">
              <Link
                to="/wishlist"
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-4 border border-stone-200 rounded-xl font-bold hover:border-emerald-300 transition-colors"
              >
                <Heart className="w-5 h-5" /> Wishlist
              </Link>
              <a
                href="tel:03143912774"
                className="flex-1 flex items-center justify-center gap-2 py-4 text-white bg-emerald-700 rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/20"
              >
                <Phone className="w-5 h-5" /> Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
