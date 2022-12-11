import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({product}) => {

  const onAdd = (cantidad) => console.log('Cantidad de productos: ', cantidad)

  return (
    <>
      <div className="container" id="cartItemDetail">
        <h2 className="nameProduct">{product.name}</h2>
        <img src={product.foto} alt="imagen producto" className="img-fluid imgProduct" />
        <p className="descriptionProduct">{product.descripcion}</p>
        <p className="priceProduct">${product.price}</p>
      </div>

      <div>
        <ItemCount
          stock={5}
          initial={1}
          onAdd={onAdd}
        />
      </div>
    </>
  )
}

export default ItemDetail