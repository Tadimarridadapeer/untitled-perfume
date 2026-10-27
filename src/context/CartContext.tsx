'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Fragrance, FragranceSize } from '@/data/fragrances';

export interface CartItem {
  id: string; // unique item key: fragrance.slug + size.id or bundle id
  fragranceId?: string;
  slug?: string;
  name: string;
  chapter?: string;
  size?: FragranceSize;
  price: number;
  quantity: number;
  image: string;
  subtitle?: string;
}

export interface CustomBundlePayload {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  quantity?: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (fragrance: Fragrance, size?: FragranceSize, quantity?: number) => void;
  addBundle: (bundle: CustomBundlePayload) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  hasFreeShipping: boolean;
}

const CART_STORAGE_KEY = 'the_noire_cart_v2';
const FREE_SHIPPING_THRESHOLD = 1499; // Standard threshold like Bla Bli Blu

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (e) {
        console.warn('Could not read cart from localStorage', e);
      }
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);

  // Sync cart changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (fragrance: Fragrance, selectedSize?: FragranceSize, quantity = 1) => {
    const size = selectedSize || fragrance.sizes.find((s) => s.isDefault) || fragrance.sizes[0];
    const itemId = `${fragrance.slug}-${size.id}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          fragranceId: fragrance.id,
          slug: fragrance.slug,
          name: fragrance.name,
          chapter: fragrance.chapter,
          size,
          price: size.price,
          quantity,
          image: fragrance.bottleImage,
          subtitle: `${size.volume} • 25% Oil Conc.`,
        },
      ];
    });

    setIsOpen(true);
  };

  const addBundle = (bundle: CustomBundlePayload) => {
    const qty = bundle.quantity || 1;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === bundle.id);
      if (existing) {
        return prev.map((item) =>
          item.id === bundle.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: bundle.id,
          name: bundle.name,
          subtitle: bundle.subtitle,
          price: bundle.price,
          quantity: qty,
          image: bundle.image,
        },
      ];
    });

    setIsOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        addBundle,
        updateQuantity,
        removeItem,
        clearCart,
        itemCount,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountUntilFreeShipping,
        hasFreeShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
