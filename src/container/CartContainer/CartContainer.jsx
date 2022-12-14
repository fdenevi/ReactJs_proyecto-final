import { useCartContext } from "../../context/CartContext"
import Footer from "../../components/Footer/Footer"
import './CartContainer.css'


const CartContainer = () => {

  const {cartList} = useCartContext()
  console.log(cartList)

  return (
    <div>
      <div className="container cartProductCarrito">
          {cartList.map(product => 
            <div key={product.id} id="productCarrito">
              <p className="titleCarritoItem">{product.name}</p>
              <p className="carritoItem">Cantidad: {product.cantidad}</p>
              <p className="carritoItem">Talle: </p>
              <p className="carritoItem">Precio: ${product.price * product.cantidad}</p>
            </div>
          )}
      </div>

      <Footer />
    </div>
  )
}

export default CartContainer