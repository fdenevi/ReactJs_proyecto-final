import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  
  const [prod, setProd] = useState({})
  const [loading, setLoading] = useState (true)
  const {productId} = useParams()


  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'products', productId)

    getDoc(queryDoc)
    .then(resp => setProd ({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally( ()=> setLoading (false))
  })


  return (
    <>
      {loading ? <p className="loading">Cargando...</p> 
        : <ItemDetail prod={prod}/>
      }
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default ItemDetailContainer