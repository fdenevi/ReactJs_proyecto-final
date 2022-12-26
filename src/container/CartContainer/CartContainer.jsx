import { useCartContext } from "../../context/CartContext"
import Footer from "../../components/Footer/Footer"
import './CartContainer.css'
import ItemCart from "../../components/ItemCart/ItemCart"


const CartContainer = () => {

  const {cartList, vaciarCarrito, precioTotal} = useCartContext();
  const iva = 1.21


  return (
    <div>
      <div className="container cartProductCarrito">
          {cartList.map(product => 
            <ItemCart 
              key={product.id}
              product={product}
            />
            )}
          <label>{precioTotal()}</label>
          <button onClick={vaciarCarrito}>vaciar carrito</button>
      </div>

      <Footer />
    </div>
  )
}

export default CartContainer