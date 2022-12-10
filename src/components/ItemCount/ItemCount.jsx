import { useState } from "react"

const ItemCount = () => {
    
    const [contador, setearContador] = useState(0)
    
    const agregarAcarrito = () => {
        setearContador (contador + 1)
    }
    const quitarDelCarrito = () => {
      setearContador (contador - 1)
    }


  return (
    <div>
        <button onClick={agregarAcarrito}>Añadir al carrito</button>
        <button onClick={quitarDelCarrito}>Quitar del carrito</button>
        <p>{contador}</p>
    </div>
  )
}

export default ItemCount