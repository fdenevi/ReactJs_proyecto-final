import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import ItemList from "../../components/ItemList/ItemList"
import Title from "../../components/Title/Title"
import './ItemListContainer.css'
import Footer from "../../components/Footer/Footer"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


    useEffect (() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'products')
      const queryFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection

        getDocs(queryFilter)
          .then (resp => setProducts (resp.docs.map (product => ({id: product.id, ...product.data() }) )))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))

    }, [categoryId])


    return (
      <>
        <Title />
        
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