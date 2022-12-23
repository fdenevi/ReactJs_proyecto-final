import { Link } from "react-router-dom"
import './ButtonCart.css'

const ButtonCart = () => {
  return (
    <div id="comprar">
        <Link to="/carrito" className="comprar">
            Finalizar compra
        </Link>

        <Link to="/home" className="comprar">
            Seguir comprando
        </Link>
    </div>
  )
}

export default ButtonCart