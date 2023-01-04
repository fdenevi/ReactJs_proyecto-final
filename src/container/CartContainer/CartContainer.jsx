import { useCartContext } from "../../context/CartContext"
import Footer from "../../components/Footer/Footer"
import CartList from "../../components/CartList/CartList"
import NoProds from "../../components/NoProds/NoProds"
import Form from "../../components/Form/Form"
import './CartContainer.css'


const CartContainer = () => {

  const { precioTotal, cantidadTotal } = useCartContext();
  

  return (
    <>
      <div className="container">  
        {cantidadTotal() > 0 ?
        <> 
          <CartList />
          
          <div id="cartCarrito">
            <p className="titleTotalPrice">El total de su compra es de ${precioTotal()}</p>
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