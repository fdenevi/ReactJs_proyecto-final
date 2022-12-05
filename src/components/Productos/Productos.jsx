import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { gFetch } from "../../helpers/gfetch"
import './Productos.css'

const Productos = () => {

  const iva = 1.21
  
  // CONSTANTE BOTONES
    const [contador, setearAgregar] = useState(0)
    const agregarAcarrito = () => {
        setearAgregar (contador + 1)
    }
    const quitarDelCarrito = () => {
      setearAgregar (contador - 1)
    }

  // PRODUCTOS
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

        {loading ?  <div>
                      <p>Cargando productos</p>
                      <Spinner animation="grow" />
                    </div> 
        : products.map ( prods =>
                <div key = {prods.id} className="cards">
                    <img src={prods.foto} alt="img producto" />
                    <p className="titleProds">{prods.name}</p>
                    <p>{prods.price * iva}</p>
                    <button className="btnCardWidget">Mas detalles</button>
                    <button onClick={agregarAcarrito}>Añadir al carrito</button>
                    <button onClick={quitarDelCarrito}>Quitar del carrito</button>
                    <p>{contador}</p>
                </div>
            )
        }       
    </div>
  )
}

export default Productos