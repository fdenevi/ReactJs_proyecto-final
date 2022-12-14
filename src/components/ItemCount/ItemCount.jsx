import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setearContador] = useState(1)
    const agregarAlCarrito = () => onAdd(contador)
    
    
    // FUNCION SUMAR
    const sumar = () => {
        if(contador < stock){
          setearContador (contador + 1)
        }
      }

    // FUNCION RESTAR
    const restar = () => {
      if (contador > initial) {
        setearContador (contador - 1)
      }
    }


  return (
    <div id="contador">
        <div id="btnContador">
          <button className="btnContador btnContadorSuma" onClick={sumar}>+</button>
          <button className="btnContador btnContadorResta" onClick={restar}>-</button>
        </div>
      <p className="valorContador">{contador}</p>

      <button className="AgragarAcarrito" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount