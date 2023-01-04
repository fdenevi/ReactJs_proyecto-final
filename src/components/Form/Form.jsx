import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import './Form.css'


const Form = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: "",
      })
    
    const {cartList, precioTotal, cleanCart} = useCartContext();
    

    const finalizarCompra = (evt) => {
        evt.preventDefault()
    
        const order = {}
        order.buyer = dataForm
        order.item = cartList.map( ({name, id, price}) => ({name, id, price}) )
        order.total = precioTotal()
        console.log(order)
    

        const db = getFirestore()
        const queryOrder = collection(db, 'orders')
        addDoc (queryOrder, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => {
            cleanCart()
            setDataForm({
                name: "",
                email: "",
                phone: "",
            })
            Swal.fire(
                'Compra realizada con exito!'
              )
        })
    }

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }



  return (
        <form onSubmit={finalizarCompra} id="form">
          <div className="inputForm">
            <div>
              <label htmlFor="name">Nombre y Apellido:</label>
              <input
                type="text"
                className="formControl"
                name="name"
                value={dataForm.name}
                placeholder="nombre y apellido"
                onChange={handleOnChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input 
                type="text" 
                className="formControl"
                name="email"
                value={dataForm.email}
                placeholder="email"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <label htmlFor="email">Confirmar email:</label>
              <input 
                type="text" 
                className="formControl"
                name="email"
                value={dataForm.email}
                placeholder="email"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Celular:</label>
              <input 
                type="number" 
                className="formControl"
                name="phone"
                value={dataForm.phone}
                placeholder="celular"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="btnForm">
            <button className="btnFormStyle btnFormOk">Finalizar compra</button>
            <button onClick={cleanCart} className="btnFormStyle btnFormClear">vaciar carrito</button>
          </div>

        </form>
  )
}

export default Form