import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";
import './FormList.css'


const FormList = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: "",
      })
    
    const {cartList, totalPrice, cleanCart} = useCartContext();
    

    const endBuy = (evt) => {
        evt.preventDefault()
    
        const order = {}
        order.buyer = dataForm
        order.item = cartList.map( ({name, id, price}) => ({name, id, price}) )
        order.total = totalPrice()
    
        const db = getFirestore()
        const queryOrder = collection(db, 'orders')
        addDoc (queryOrder, order)
        // .then (resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => {
            cleanCart()
            setDataForm({
                name: "",
                email: "",
                phone: "",
            })
            Swal.fire(
                'Compra realizada con exito!',
                'En instantes recibiras un email con la información de tu compra',
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
    <Form 
      endBuy={endBuy}
      handleOnChange={handleOnChange}
      dataForm={dataForm}
    />
  )
}

export default FormList