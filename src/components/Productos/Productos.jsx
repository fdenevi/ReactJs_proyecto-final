import { useEffect, useState } from "react"
import { gFetch } from "../../helpers/gfetch"
import './Productos.css'

const Productos = () => {

    const [products, setProducts] = useState ([])  
    const [loading, setLoading] = useState (true)
  
    useEffect( () => {
      gFetch()
      .then( resp => setProducts (resp) )
      .catch( err => console.log (err) )
      .finally( ()=> setLoading (false) )
    }, [] )

  return (
    <div className='container' id= "cardProds">

        {loading ? <p>Cargando productos...</p> 
        : products.map ( prods => 
                <div key = {prods.id} className="cards">
                    <img src={prods.foto} alt="img producto" />
                    <p className="titleProds">{prods.name}</p>
                    <button className="btnCardWidget">Agregar al carrito</button>
                </div> 
            )
        }
        
    </div>
  )
}

export default Productos