import { useCartContext } from "../../context/CartContext"
import Footer from "../../components/Footer/Footer"
import './CartContainer.css'
import ItemCart from "../../components/ItemCart/ItemCart"
import NoProds from "../../components/NoProds/NoProds"


const CartContainer = () => {

  const {cartList, vaciarCarrito, precioTotal, cantidadTotal} = useCartContext();


  return (
    <div>
      <div className="container">
        <div id="productCarrito">
          {cartList.map(product => 
            <ItemCart 
            key={product.id}
            product={product}
            />
            )}
        </div>

        {cantidadTotal() > 0 ? 
          <div id="cartCarrito">
            <p>El total de su compra es de ${precioTotal()}</p>
            <button onClick={vaciarCarrito}>vaciar carrito</button>
          </div>
        : <NoProds />
        }

      </div>

      <Footer />
    </div>
  )
}

export default CartContainer