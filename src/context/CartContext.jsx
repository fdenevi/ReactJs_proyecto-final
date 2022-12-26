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
    }
    

    // VACIAR CARRITO
    const vaciarCarrito = () => setCartList([])

    // PRECIO TOTAL
    const precioTotal = () => cartList.reduce((count, product) => count += (product.cantidad * product.price * iva))

    // CANTIDAD TOTAL
    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidad, 0)

    // ELIMINAR ITEM
    const eliminarItem = (id) => setCartList(cartList.filter(product => product.id != id))



  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        vaciarCarrito,
        cantidadTotal,
        precioTotal,
        eliminarItem,
    }}>
        {children}

    </CartContext.Provider>
  )
}