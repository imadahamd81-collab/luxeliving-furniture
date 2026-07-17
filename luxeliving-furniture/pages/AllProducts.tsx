import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown, ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'default' | 'price-low' | 'price-high'>('default');

  const filteredProducts = useMemo(() => {
    let result = activeCategory === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.categorySlug === activeCategory);
    if (sortOrder === 'price-low') result.sort((a,b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    else if (sortOrder === 'price-high') result.sort((a,b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    return result;
  }, [activeCategory, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in-up">
        <Link to="/" className="flex items-center gap-1 text-stone-500 hover:text-brand-700 transition-colors"><Home className="w-4 h-4" /> Home</Link>
        <ChevronRight className="w-4 h-4 text-stone-400" />
        <span className="text-stone-900 font-semibold">All Products</span>
      </nav>

      <div className="flex flex-col space-y-8 mb-12">
        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">All Furniture</h1>
          <p className="text-stone-500">Discover our complete collection of modern, handcrafted pieces.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.slug
                    ? 'bg-gradient-to-r from-brand-700 to-brand-600 text-white shadow-lg shadow-brand-800/20'
                    : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-stone-500">Showing <span className="font-bold text-stone-900">{filteredProducts.length}</span> of <span className="font-bold text-stone-900">{PRODUCTS.length}</span> products</p>
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm font-semibold hover:border-brand-400 transition-colors">
                <SlidersHorizontal className="w-4 h-4" /> Sort: {sortOrder === 'default' ? 'Recommended' : sortOrder === 'price-low' ? 'Price: Low' : 'Price: High'} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-stone-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 overflow-hidden">
                <button onClick={() => setSortOrder('default')} className="w-full text-left px-4 py-3 text-sm hover:bg-stone-50 border-b border-stone-50">Recommended</button>
                <button onClick={() => setSortOrder('price-low')} className="w-full text-left px-4 py-3 text-sm hover:bg-stone-50 border-b border-stone-50">Price: Low to High</button>
                <button onClick={() => setSortOrder('price-high')} className="w-full text-left px-4 py-3 text-sm hover:bg-stone-50">Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.map((product, idx) => (
          <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 80}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
