import { Link } from "react-router-dom"
import './Item.css'

const Item = ({product}) => {

    const iva = 1.21

  return (
    <div className="cards">
        <img src={product.photo} alt="img producto" className="img-fluid" />
        <p className="titleProds">{product.name}</p>
        <p className="price">${product.price * iva}</p>
        <Link to={`/detail/${product.id}`} className="btnMoreDetails">Mas detalles</Link>
    </div>
  )
}

export default Item