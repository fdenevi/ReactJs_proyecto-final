import { Link } from "react-router-dom"
import './NoProds.css'


const NoProds = () => {
  return (
    <div id="noProds">
        <h1 className="titleNoProduct">No hay productos</h1>
        <Link to="/home" className="btnComprar">COMPRAR</Link>
    </div>
  )
}

export default NoProds