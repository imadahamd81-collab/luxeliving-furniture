import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, WHATSAPP_NUMBER, STORE_PHONE } from '../constants';
import { ChevronLeft, Home, MessageSquare, Phone, Package, ShieldCheck, Truck, Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-emerald-800 underline">Browse all products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.name} added to cart!`, 'success');
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    showToast(isInWishlist(product.id) ? `${product.name} removed from wishlist` : `${product.name} added to wishlist`, 'info');
  };

  const handleWhatsAppOrder = () => {
    const finalPrice = product.discountPrice || product.price;
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering the *${product.name}* (${product.id}).\nPrice: $${finalPrice}\nQuantity: ${quantity}\nCould you please provide more details on how to proceed?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const relatedProducts = PRODUCTS.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
      <nav className="flex items-center gap-2 text-sm mb-6 animate-fade-in-up">
        <Link to="/" className="flex items-center gap-1 text-stone-500 hover:text-emerald-700 transition-colors"><Home className="w-4 h-4" /> Home</Link>
        <ChevronLeft className="w-4 h-4 text-stone-400 rotate-180" />
        <Link to="/products" className="text-stone-500 hover:text-emerald-700 transition-colors">All Products</Link>
        <ChevronLeft className="w-4 h-4 text-stone-400 rotate-180" />
        <span className="text-stone-900 font-semibold truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-4 animate-slide-in-left">
          <div className="aspect-square bg-stone-100 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl group relative">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${activeImage === idx ? 'border-emerald-800 shadow-md scale-95' : 'border-transparent hover:border-emerald-200 opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} view ${idx}`} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col lg:sticky lg:top-24 lg:self-start animate-slide-in-right">
          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 shadow-xl border border-stone-100">
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-widest text-xs">
                <Star className="w-3 h-3 fill-current" />
                <span>Premium Collection</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold text-emerald-900">${product.discountPrice.toLocaleString()}</span>
                    <span className="text-xl text-stone-400 line-through">${product.price.toLocaleString()}</span>
                    <span className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase shadow-md">
                      Save {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="text-3xl sm:text-4xl font-bold text-stone-900">${product.price.toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className="space-y-4 pb-6 border-b border-stone-100">
              <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-stone-50 p-3 rounded-xl flex items-center gap-3 border border-stone-100">
                  <Truck className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-medium text-stone-600">Free Home Delivery</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl flex items-center gap-3 border border-stone-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-medium text-stone-600">5 Year Warranty</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl flex items-center gap-3 border border-stone-100">
                  <Package className="w-5 h-5 text-emerald-800" />
                  <span className="text-xs font-medium text-stone-600">Secure Packaging</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 text-stone-600 hover:bg-stone-50 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2.5 text-stone-900 font-bold text-center min-w-[60px]">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 text-stone-600 hover:bg-stone-50 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={isInCart(product.id)}
                  className="flex-1 bg-gradient-to-r from-green-700 via-emerald-600 to-green-600 text-white py-3.5 rounded-xl font-bold hover:from-green-800 hover:via-emerald-700 hover:to-green-700 transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className={`px-4 py-3 rounded-xl border-2 transition-all ${isInWishlist(product.id) ? 'border-red-500 bg-red-50 text-red-500' : 'border-stone-200 hover:border-emerald-300'}`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                Order on WhatsApp
              </button>
              <a
                href={`tel:${STORE_PHONE}`}
                className="w-full border-2 border-stone-200 text-stone-900 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call For Details
              </a>
            </div>

            <div className="mt-6 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-1.5 flex items-center gap-2"><ShieldCheck className="w-5 h-5" />Shopping with confidence</h4>
              <p className="text-emerald-800/70 text-sm">
                All our items are inspected by hand before shipping. We offer a 30-day money-back guarantee if you aren't completely satisfied with the quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-20 sm:mt-24">
          <div className="flex justify-between items-end mb-10">
            <div className="space-y-2">
              <p className="text-emerald-700 font-bold uppercase tracking-widest text-xs">You May Also Like</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Related Products</h2>
              <div className="h-1.5 w-20 bg-emerald-700 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
