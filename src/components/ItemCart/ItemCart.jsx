import { useCartContext } from '../../context/CartContext'
import './ItemCart.css'


const ItemCart = ({product}) => {

    const {eliminarItem} = useCartContext()
    const iva = 1.21

    return (
        <div id="productCarrito">
            <p className="titleCarritoItem">{product.name}</p>
            <p className="carritoItem">Cantidad: {product.cantidad}</p>
            <p className="carritoItem">Talle: </p>
            <p className="carritoItem">Precio: ${product.cantidad * product.price * iva}</p>
            <button onClick={() => eliminarItem(product.id)}>eliminar</button>
        </div>
    )
}


export default ItemCart