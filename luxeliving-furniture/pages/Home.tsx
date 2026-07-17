import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, TrendingUp, Clock, Star, Quote } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const promoProducts = PRODUCTS.filter(p => p.isPromo).slice(0, 4);
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 8);

  const testimonials = [
    { name: 'Sarah Johnson', initials: 'SJ', role: 'Interior Designer', text: 'Absolutely stunning quality. The materials and craftsmanship exceeded every expectation. LuxeLiving has transformed my clients\' homes.' },
    { name: 'Michael Chen', initials: 'MC', role: 'Homeowner', text: 'The entire experience was seamless. From order to delivery, everything was perfect. Highly recommended!' },
    { name: 'Emily Rodriguez', initials: 'ER', role: 'Architect', text: 'LuxeLiving has become my go-to for premium furniture. Their custom pieces are extraordinary and unique.' },
  ];

  const stats = [
    { value: '15K+', label: 'Happy Customers' },
    { value: '500+', label: 'Products' },
    { value: '25+', label: 'Years Experience' },
    { value: '100%', label: 'Quality Guaranteed' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-stone-900 pt-24">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=100&w=3840" alt="Luxury Living Room" className="w-full h-full object-cover opacity-60 animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/90 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-8 animate-fade-in-up shadow-xl">
              <Sparkles className="w-4 h-4" />
              <span>New Spring Collection 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Redefine Your <span className="text-emerald-400">Living</span> Space
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Discover handcrafted furniture that blends timeless elegance with modern comfort. Each piece tells a story of exceptional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <Link to="/products" className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
                Explore Collection
              </Link>
              <Link to="/custom-order" className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all text-center text-lg">
                Custom Design
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-white via-brand-50/30 to-accent-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-widest text-xs mb-4">
              <TrendingUp className="w-4 h-4" />
              Browse by Category
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Shop by Room</h2>
            <div className="h-1.5 w-20 bg-emerald-700 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((category, idx) => (
              <Link key={category.id} to={`/category/${category.slug}`} className="group text-center space-y-4 animate-scale-in" style={{ animationDelay: `${(idx + 1) * 80}ms` }}>
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-stone-100 group-hover:ring-emerald-300 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                  <img src={category.image} alt={category.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-700 font-bold uppercase tracking-widest text-xs">
                <Star className="w-4 h-4 fill-current" />
                Featured Collection
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">Curated For You</h2>
            </div>
            <Link to="/products" className="bg-emerald-700 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              View All Furniture
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-800/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-md text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-emerald-300 font-bold uppercase tracking-[0.2em] text-xs">
                <Clock className="w-4 h-4" />
                Limited Time Offers
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">Flash Sale: Modern Living Essentials</h2>
              <p className="text-emerald-100/70 text-sm">Up to 40% off on best‑selling promo items. Limited stock available.</p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {promoProducts.map((product, idx) => (
                <Link key={product.id} to={`/product/${product.id}`} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex gap-4 items-center group hover:bg-white transition-all duration-300 border border-white/10 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 120}ms` }}>
                  <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-stone-200">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-white group-hover:text-stone-900 font-bold text-sm truncate">{product.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold text-sm">${product.discountPrice?.toLocaleString()}</span>
                      <span className="text-white/40 group-hover:text-stone-400 line-through text-[10px]">${product.price.toLocaleString()}</span>
                    </div>
                    <span className="mt-1 inline-block bg-emerald-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full w-fit">-{Math.round(((product.price - (product.discountPrice || 0)) / product.price) * 100)}%</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 sm:space-y-24">
        {CATEGORIES.map((category, idx) => {
          const items = PRODUCTS.filter(p => p.categorySlug === category.slug).slice(0, 6);
          const reverse = idx % 2 === 1;
          const gradients = [
            'from-brand-900/80 via-brand-800/40 to-transparent',
            'from-accent-900/80 via-accent-800/40 to-transparent',
            'from-emerald-900/80 via-emerald-800/40 to-transparent',
            'from-violet-900/80 via-violet-800/40 to-transparent',
            'from-amber-900/80 via-amber-800/40 to-transparent',
            'from-rose-900/80 via-rose-800/40 to-transparent',
          ];
          const gradient = gradients[idx % gradients.length];
          return (
            <div key={category.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Link to={`/category/${category.slug}`} className={`group relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-xl ${reverse ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3]">
                  <img src={category.image} alt={category.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient} flex items-end p-8 sm:p-10`}>
                  <div>
                    <p className="text-brand-300 font-bold text-xs uppercase tracking-widest mb-2">Shop the Collection</p>
                    <span className="text-white font-serif text-3xl sm:text-4xl font-bold drop-shadow-lg">{category.name}</span>
                  </div>
                </div>
              </Link>

              <div className={reverse ? 'lg:order-1' : ''}>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-brand-700 font-bold uppercase tracking-widest text-xs mb-2">Shop the look</p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">{category.name} Collection</h3>
                  </div>
                  <Link to={`/category/${category.slug}`} className="text-brand-800 font-bold text-sm hover:gap-3 transition-all flex items-center gap-2">View All <ChevronRight className="w-4 h-4" /></Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((product, pIdx) => (
                    <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(pIdx + 1) * 100 + 300}ms` }}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-accent-50/40 via-white to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-widest text-xs mb-4">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">What Our Clients Say</h2>
            <div className="h-1.5 w-20 bg-emerald-700 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-stone-50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:-translate-y-1 animate-flip-in" style={{ animationDelay: `${(i + 1) * 150}ms` }}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></svg>
                  ))}
                </div>
                <p className="text-stone-700 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">{t.initials}</div>
                  <div>
                    <h4 className="font-bold text-stone-900">{t.name}</h4>
                    <p className="text-stone-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 md:p-20 relative overflow-hidden text-center md:text-left">
          <img src="https://images.unsplash.com/photo-1757262798677-ab4af4455a58?auto=format&fit=crop&q=90&w=3840" alt="Custom Furniture" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">Can't find exactly what you're looking for?</h2>
              <p className="text-stone-400 text-lg md:text-xl max-w-xl">Our master craftsmen can bring your unique vision to life with custom-made furniture.</p>
              <Link to="/custom-order" className="inline-block bg-emerald-600 text-white px-10 py-5 rounded-full font-bold hover:bg-emerald-500 transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Start Custom Project
              </Link>
            </div>
            <div className="flex-1 hidden md:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?auto=format&fit=crop&q=90&w=2400" alt="Custom furniture detail" className="rounded-2xl h-40 w-full object-cover" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1758977404510-6ab7e07ff1fe?auto=format&fit=crop&q=90&w=2400" alt="Craftsmanship" className="rounded-2xl h-60 w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1775241186452-c3d99b09f223?auto=format&fit=crop&q=90&w=2400" alt="Design process" className="rounded-2xl h-60 w-full object-cover" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?auto=format&fit=crop&q=90&w=2400" alt="Finished piece" className="rounded-2xl h-40 w-full object-cover grayscale opacity-50" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
