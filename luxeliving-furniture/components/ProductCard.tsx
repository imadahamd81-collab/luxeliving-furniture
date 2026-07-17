import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const discount = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    showToast(`${product.name} added to cart!`, 'success');
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
    showToast(
      isInWishlist(product.id)
        ? `${product.name} removed from wishlist`
        : `${product.name} added to wishlist`,
      'info'
    );
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col shine-effect hover:-translate-y-2"
    >
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-[1]"></div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
              isInWishlist(product.id)
                ? 'bg-red-500 text-white'
                : 'bg-white text-stone-600 hover:text-red-500'
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </button>
          <span className="p-2 bg-white text-stone-600 rounded-full shadow-lg hover:text-accent-600 transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Quick view">
            <Eye className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2.5 rounded-lg text-sm font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <p className="text-[10px] uppercase tracking-widest text-brand-600 font-bold mb-1">
          {product.categorySlug}
        </p>
        <h3 className="text-stone-900 font-semibold text-sm mb-2 line-clamp-2 leading-tight group-hover:text-brand-700 transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-col leading-none">
            {product.discountPrice ? (
              <>
                <span className="text-brand-700 font-bold text-lg">
                  ${product.discountPrice.toLocaleString()}
                </span>
                <span className="text-stone-400 text-[11px] line-through">
                  ${product.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-stone-900 font-bold text-lg">
                ${product.price.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="shrink-0 p-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
