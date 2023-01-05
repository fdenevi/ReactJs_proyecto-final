import { Nav } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartWidget.css'


const CartWidget = () => {

  const {totalQuantity} = useCartContext()

  return (
    <div>
        <Nav id="cart">
            <NavLink to='/cart'>
              <FaShoppingCart id="iconCart"/>
            </NavLink>
            <div id="numberCart">{totalQuantity() > 0 && totalQuantity()}</div>
        </Nav>
    </div>
  )
}

export default CartWidget