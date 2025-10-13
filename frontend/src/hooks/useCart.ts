import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(currentItems => {
      const existing = currentItems.find(item => item.product.id === product.id);
      if (existing) {
        return currentItems.map(item =>
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(currentItems => currentItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const clearCart = () => setCartItems([]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart
  };

  return React.createElement(CartContext.Provider, { value }, children);
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};