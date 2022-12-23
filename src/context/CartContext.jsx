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


const vaciarCarrito = () => setCartList([])


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito
    }}>
        {children}

    </CartContext.Provider>
  )
}