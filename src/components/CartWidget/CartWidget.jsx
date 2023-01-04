import { Nav } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartWidget.css'


const CartWidget = () => {

  const {cantidadTotal} = useCartContext()

  return (
    <div>
        <Nav id="carrito">
            <NavLink to='/carrito'>
              <FaShoppingCart id="iconCarrito"/>
            </NavLink>
            <div id="numberCart">{cantidadTotal() > 0 && cantidadTotal()}</div>
        </Nav>
    </div>
  )
}

export default CartWidget