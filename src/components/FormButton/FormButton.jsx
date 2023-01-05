import { useCartContext } from "../../context/CartContext";
import './FormButton.css'


const FormButton = () => {

    const { cleanCart } = useCartContext();

  return (
    <div className="btnForm">
        <button className="btnFormStyle btnFormOk">Finalizar compra</button>
        <button onClick={cleanCart} className="btnFormStyle btnFormClear">vaciar carrito</button>
    </div>
  )
}

export default FormButton