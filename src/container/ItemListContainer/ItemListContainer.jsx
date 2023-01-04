import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import ItemList from "../../components/ItemList/ItemList"
import Titulo from "../../components/Titulo/Titulo"
import './ItemListContainer.css'
import Footer from "../../components/Footer/Footer"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()


    useEffect (() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryFilter = categoriaId ? query(queryCollection, where('categoria', '==', 'ss23')) : queryCollection

        getDocs(queryFilter)
          .then (resp => setProducts (resp.docs.map (product => ({id: product.id, ...product.data() }) )))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))

    }, [categoriaId])


    return (
      <>
        <Titulo />
        
        <div className='container' id= "cardProds">
            {loading ?  <div id="cardLoading">
                          <p className="loading">Cargando productos</p>
                          <Spinner animation="grow" className="spinner"/>
                        </div> 
            : <ItemList products={products}/>
            }       
        </div>
        <div>
          <Footer/>
        </div>
      </>
    )
}


export default ItemListContainer