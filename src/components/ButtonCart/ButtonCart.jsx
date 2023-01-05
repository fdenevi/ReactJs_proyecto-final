import { Link } from "react-router-dom"
import './ButtonCart.css'

const ButtonCart = () => {
  return (
    <div id="buy">
        <Link to="/cart" className="buy">
            Ir al carrito
        </Link>

        <Link to="/home" className="buy">
            Seguir comprando
        </Link>
    </div>
  )
}

export default ButtonCart