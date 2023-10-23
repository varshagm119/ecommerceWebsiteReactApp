import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      title: "Album1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Album2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Album3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Album4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>;
};

export default Context;

export const CartState = () => {
    return useContext(CartContext)
}
