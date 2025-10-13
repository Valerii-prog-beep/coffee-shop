import { create } from 'zustand';
import type{ Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return {
          cartItems: state.cartItems.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          cartItems: [...state.cartItems, { product, quantity: 1 }]
        };
      }
    });
  },
  
  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.product.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    
    set((state) => ({
      cartItems: state.cartItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    }));
  },
  
  getTotalItems: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  },
  
  clearCart: () => {
    set({ cartItems: [] });
  }
}));