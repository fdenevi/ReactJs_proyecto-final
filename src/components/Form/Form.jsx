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
    <>
        <form onSubmit={finalizarCompra}>
            <label htmlFor="name">Nombre y Apellido:</label>
            <input 
              type="text"
              className="form-control"
              name="name"
              value={dataForm.name}
              placeholder="nombre y apellido"
              onChange={handleOnChange}
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              className="form-control"
              name="email"
              value={dataForm.email}
              placeholder="email"
              onChange={handleOnChange}
            />

            <label htmlFor="email">Confirmar email:</label>
            <input 
              type="text" 
              className="form-control"
              name="email"
              value={dataForm.email}
              placeholder="email"
              onChange={handleOnChange}
            />

            <label htmlFor="phone">Celular:</label>
            <input 
              type="number" 
              className="form-control"
              name="phone"
              value={dataForm.phone}
              placeholder="celular"
              onChange={handleOnChange}
            />

        <button className="btnForm">Finalizar compra</button>
        <button onClick={cleanCart} className="btnForm">vaciar carrito</button>
        </form>
    </>
  )
}

export default Form