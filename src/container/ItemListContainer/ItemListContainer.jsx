import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { gFetch } from "../../helpers/gfetch"
import ItemList from "../../components/ItemList/ItemList"
import Titulo from "../../components/Titulo/Titulo"
import './ItemListContainer.css'
import Footer from "../../components/Footer/Footer"



const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
  
    useEffect( () => {
      if (categoriaId){
          gFetch()
          .then(resp => setProducts (resp.filter(products => products.categoria === categoriaId)))
          .catch(err => console.log (err))
          .finally(()=> setLoading (false))
      } else {
          gFetch()
          .then(resp => setProducts (resp))
          .catch(err => console.log (err))
          .finally(()=> setLoading (false))
      }
    }, [categoriaId] )


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