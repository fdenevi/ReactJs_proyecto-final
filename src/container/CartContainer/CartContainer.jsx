import { useCartContext } from "../../context/CartContext"
import Footer from "../../components/Footer/Footer"
import './CartContainer.css'
import ItemCart from "../../components/ItemCart/ItemCart"


const CartContainer = () => {

  const {cartList, vaciarCarrito} = useCartContext()
  console.log(cartList)

  return (
    <div>
      <div className="container cartProductCarrito">
          {cartList.map(product => 
            <ItemCart 
              key={product.id}
              product={product}
            />
          )}

      </div>

      <Footer />
    </div>
  )
}

export default CartContainer