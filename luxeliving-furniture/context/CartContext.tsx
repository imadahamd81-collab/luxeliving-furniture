import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types';

interface CartItem extends Product { quantity: number; }
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) { removeFromCart(productId); return; }
    setItems(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  }, [removeFromCart]);

  const clearCart = useCallback(() => setItems([]), []);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + (i.discountPrice || i.price) * i.quantity, 0);
  const isInCart = useCallback((id: string) => items.some(i => i.id === id), [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};