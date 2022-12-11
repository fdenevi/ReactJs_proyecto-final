import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { gFetch } from "../../helpers/gfetch"
import ItemList from "../../components/ItemList/ItemList"
import Titulo from "../../components/Titulo/Titulo"
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
  
    useEffect( () => {
        gFetch()
        .then( resp => setProducts (resp) )
        .catch( err => console.log (err) )
        .finally( ()=> setLoading (false) )
    }, [] )


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
      </>
    )
}


export default ItemListContainer