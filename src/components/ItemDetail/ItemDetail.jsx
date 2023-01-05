import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ButtonCart from "../ButtonCart/ButtonCart"
import ItemCount from "../ItemCount/ItemCount"
import OptionSelect from "../OptionSelect/OptionSelect"

import './ItemDetail.css'

const ItemDetail = ({prod}) => {

  const iva = 1.21

  const { addToCart } = useCartContext();
  const [inputType, setInputType] = useState('button');


  const onAdd = (quantity) => {
    addToCart ({...prod, quantity})
    setInputType('input')
  }
  

  return (
    <div id="cartItemDetail">
      <div className="container">
        <h2 className="nameProduct">{prod.name}</h2>
        <img src={prod.photo} alt="imagen producto" className="img-fluid imgProduct" />
        <p className="descriptionProduct">{prod.description}</p>

        <h3 className="titleSize">Cual es tu talle?</h3>
        <OptionSelect />

        <p className="priceProduct">${prod.price * iva}</p>
      </div>

      <div>
        {
          inputType === 'button' ? 
            <ItemCount
              stock={5}
              initial={1}
              onAdd={onAdd}
            />
          : <ButtonCart />     
        }
      </div>
    </div>
  )
}

export default ItemDetail