import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const CategoryListing: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = CATEGORIES.find(c => c.slug === slug);
  const categoryProducts = PRODUCTS.filter(p => p.categorySlug === slug);
  if (!category) return <div>Category not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <Link to="/products" className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm mb-8 hover:gap-3 transition-all group animate-fade-in-up">
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />Back to All Products
      </Link>
      <div className="relative h-[40vh] sm:h-[50vh] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden mb-10 flex items-center justify-center text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <img src={category.image} alt={category.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover brightness-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-800/20 to-transparent"></div>
        <div className="relative z-10 space-y-4 px-4 animate-scale-in" style={{ animationDelay: '300ms' }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white uppercase tracking-wider drop-shadow-2xl">{category.name}</h1>
          <p className="text-white/90 max-w-lg mx-auto font-light text-sm sm:text-base">Elevate your {category.name.toLowerCase()} with our premium selected pieces.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">{categoryProducts.length} Items Found</h2>
          <span className="px-3 py-1 bg-gradient-to-r from-brand-100 to-accent-100 text-brand-800 text-xs font-bold rounded-full uppercase tracking-wider">Category</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl text-sm font-semibold hover:border-brand-400 transition-colors shadow-sm">
            <ArrowUpDown className="w-4 h-4" /> Sort
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl text-sm font-semibold hover:border-brand-400 transition-colors shadow-sm">
            <SlidersHorizontal className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categoryProducts.map((product, idx) => (
          <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryListing;
