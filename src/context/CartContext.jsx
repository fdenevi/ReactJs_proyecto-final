import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext([])

const iva = 1.21

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const  [cartList, setCartList]=useState([])

    const addToCart = (producto) => {
            setCartList([
                ...cartList,
                producto
            ])
        // setear en localstorage
    }
    

    // VACIAR CARRITO
    const cleanCart = () => setCartList([])

    // PRECIO TOTAL
    const precioTotal = () => cartList.reduce((count, product) => count += (product.cantidad * product.price * iva), 0)

    // CANTIDAD TOTAL
    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidad, 0)

    // ELIMINAR ITEM
    const eliminarItem = (id) => setCartList(cartList.filter(product => product.id != id))


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        cleanCart,
        cantidadTotal,
        precioTotal,
        eliminarItem,
    }}>
        {children}
    </CartContext.Provider>
  )
}