import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (i) => {
    // i Kolle ettelaate mahsulie ke rush click krdim.
    setCart([...cart, {...i, count: 1}]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
