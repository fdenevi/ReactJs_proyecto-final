import { Nav } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div>
        <Nav id="carrito">
            <NavLink to='/carrito'><FaShoppingCart id="iconCarrito"/></NavLink>1
        </Nav>
    </div>
  )
}

export default CartWidget