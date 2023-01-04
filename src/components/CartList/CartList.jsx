import { useCartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import './CartList.css'


const CartList = () => {

    const { cartList } = useCartContext()

    return (
      <div id="productCarrito">
        {cartList.map((product) => 
          <Cart 
            key={product.id}
            product={product}
          />
        )}
      </div>
    )
}


export default CartList