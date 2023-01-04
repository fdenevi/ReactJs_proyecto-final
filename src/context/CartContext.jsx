import { useState, createContext, useContext } from "react";

const iva = 1.21
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList]=useState([])

    const addToCart = (product) => {

        const idx = cartList.findIndex(prod => prod.id === product.id)

        if (idx === -1) {
            setCartList([
                ...cartList,
                product
            ])
        } else {
            cartList[idx].cantidad += product.cantidad
            setCartList ([...cartList])
        }
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
        { children }
    </CartContext.Provider>
  )
}