import { useCartContext } from "../../context/CartContext"
import Footer from "../../components/Footer/Footer"
import CartList from "../../components/CartList/CartList"
import NoProds from "../../components/NoProds/NoProds"
import Form from "../../components/Form/Form"
import './CartContainer.css'


const CartContainer = () => {

  const { totalPrice, totalQuantity } = useCartContext();
  

  return (
    <>
      <div className="container">  
        {totalQuantity() > 0 ?
        <> 
          <CartList />
          
          <div id="cartCart">
            <p className="titleTotalPrice">El total de su compra es de ${totalPrice()}</p>
          </div>

          <Form />
        </>
        : <NoProds />
        }

      </div>

      <Footer />
    </>
  )
}

export default CartContainer