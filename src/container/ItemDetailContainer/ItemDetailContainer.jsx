import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from '../../helpers/gFetch'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState (true)
  const {productoId} = useParams()

  useEffect( () => {
    gFetch(productoId)
      .then(resp => setProduct(resp))
      .catch(err => console.log(err))
      .finally( ()=> setLoading (false))
  }, [])

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