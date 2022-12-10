import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setearContador] = useState(1)
    const agregarAlCarrito = () => onAdd(contador)
    
    const sumar = () => {
        if(contador < stock){
          setearContador (contador + 1)
        }
      }
    
    const restar = () => {
      if (contador > initial) {
        setearContador (contador - 1)
      }
    }


  return (
    <div id="contador">
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p>{contador}</p>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount