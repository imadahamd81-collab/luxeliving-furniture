import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addToWishlist = useCallback((product: Product) => {
    setItems(prev => prev.some(i => i.id === product.id) ? prev : [...prev, product]);
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.id !== productId));
  }, []);

  const isInWishlist = useCallback((productId: string) => items.some(i => i.id === productId), [items]);
  const toggleWishlist = useCallback((product: Product) => {
    isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
  }, [isInWishlist, addToWishlist, removeFromWishlist]);

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist, totalItems: items.length }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};