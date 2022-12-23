import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState (true)
  const {productoId} = useParams()


  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', productoId)

    getDoc(queryDoc)
    .then(respuesta => setProduct ({id: respuesta.id, ...respuesta.data()}))
    .catch(err => console.log(err))
    .finally( ()=> setLoading (false))
  })


  return (
    <>
      {loading ? <p className="cargando">Cargando...</p> 
        : <ItemDetail product={product}/>
      }
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default ItemDetailContainer