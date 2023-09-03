import { createContext, useContext, useState } from "react";

export const MyContext=createContext()

export const useMyContext= () => useContext(MyContext);

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find(product => cartItems.product.id === product.id);
    console.log('Current cartItems:', cartItems);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCartItems([...cartItems])
    } else {
    setCartItems([...cartItems, { product, quantity }]);
  }
}

  return (
    <MyContext.Provider value={{cartItems, addToCart,}}>
      {children}
    </MyContext.Provider>
  )
};
