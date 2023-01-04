import { useCartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = ({product}) => {

  const { eliminarItem } = useCartContext()
  const iva = 1.21


  return (
    <div id="CartList">
      <p className="titleCarritoItem">{product.name}</p>
      <p className="carritoItem">Cantidad: {product.cantidad}</p>
      <p className="carritoItem">Precio: ${product.cantidad * product.price * iva}</p>
      <button onClick={() => eliminarItem(product.id)} className="btnEliminar">eliminar</button>
    </div>
  )
}

export default Cart