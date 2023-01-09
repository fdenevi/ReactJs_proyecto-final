import { useCartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = ({product}) => {

  const { deleteItem } = useCartContext()
  const iva = 1.21


  return (
    <div id="cartList">
      <p className="titleCartItem">{product.name}</p>
      <p className="cartItem">Cantidad: {product.quantity}</p>
      <p className="cartItem">Precio: ${product.quantity * product.price * iva}</p>
      <button onClick={() => deleteItem(product.id)} className="btnRemove">eliminar</button>
    </div>
  )
}

export default Cart