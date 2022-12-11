import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({product}) => {

  const iva = 1.21
  const onAdd = (cantidad) => console.log('Cantidad de productos: ', cantidad)

  return (
    <div id="cartItemDetail">
      <div className="container">
        <h2 className="nameProduct">{product.name}</h2>
        <img src={product.foto} alt="imagen producto" className="img-fluid imgProduct" />
        <p className="descriptionProduct">{product.descripcion}</p>

        <h3 className="titleTalle">Cual es tu talle?</h3>
        <form action="#">
          <select name="size" className="size">
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
        </form>

        <p className="priceProduct">${product.price * iva}</p>
      </div>

      <div>
        <ItemCount
          stock={5}
          initial={1}
          onAdd={onAdd}
        />
      </div>
    </div>
  )
}

export default ItemDetail