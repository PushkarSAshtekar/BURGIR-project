


import React, { createContext, useState } from "react";
import Menuburgerlist from "../components/ExploreMenu/MenuData";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);
    if (existingItemIndex >= 0) {
      
      const updatedCart = cart.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      
      setCart([...cart, { ...newItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const incrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    Menuburgerlist,
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

