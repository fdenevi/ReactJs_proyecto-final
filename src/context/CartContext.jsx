import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const  [cartList, setCartList]=useState([])

    const addToCart = (producto) => {
        setCartList([
            ...cartList,
            producto
        ])
    }


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
