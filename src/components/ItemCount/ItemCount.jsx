import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [accountant, setearaccountant] = useState(1)
    const addToCart = () => onAdd(accountant)
    
    
    // FUNCION SUMAR
    const sumar = () => {
        if(accountant < stock){
          setearaccountant (accountant + 1)
        }
      }

    // FUNCION RESTAR
    const restar = () => {
      if (accountant > initial) {
        setearaccountant (accountant - 1)
      }
    }


  return (
    <div id="accountant">
        <div id="btnAccountant">
          <button className="btnAccountant btnAccountantSuma" onClick={sumar}>+</button>
          <button className="btnAccountant btnAccountantResta" onClick={restar}>-</button>
        </div>
      <p className="valiuAccountant">{accountant}</p>

      <button className="btnAddToCart" onClick={addToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount