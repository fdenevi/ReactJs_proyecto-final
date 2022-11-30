import { Nav } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div>
        <Nav id="carrito">
            <Nav.Link href="#carrito"><FaShoppingCart id="iconCarrito"/></Nav.Link>1
        </Nav>
    </div>
  )
}

export default CartWidget