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
            cartList[idx].quantity += product.quantity
            setCartList ([...cartList])
        }
        // setear en localstorage
    }

    // VACIAR CARRITO
    const cleanCart = () => setCartList([])

    // PRECIO TOTAL
    const totalPrice = () => cartList.reduce((count, product) => count += (product.quantity * product.price * iva), 0)

    // quantity TOTAL
    const totalQuantity = () => cartList.reduce((count, product) => count += product.quantity, 0)

    // ELIMINAR ITEM
    const deleteItem = (id) => setCartList(cartList.filter(product => product.id != id))


  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        cleanCart,
        totalQuantity,
        totalPrice,
        deleteItem,
    }}>
        { children }
    </CartContext.Provider>
  )
}