import { Link } from "react-router-dom"
import './Item.css'

const Item = ({prods}) => {

    const iva = 1.21

  return (
    <div className="cards">
        <img src={prods.foto} alt="img producto" className="img-fluid" />
        <p className="titleProds">{prods.name}</p>
        <p className="price">${prods.price * iva}</p>
        <Link to={`/detail/${prods.id}`} className="btnMasDetalles">Mas detalles</Link>
    </div>
  )
}

export default Item