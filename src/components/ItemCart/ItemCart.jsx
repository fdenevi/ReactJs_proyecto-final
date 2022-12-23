import './ItemCart.css'


const ItemCart = ({product}) => {

    return (
        <div id="productCarrito">
            <p className="titleCarritoItem">{product.name}</p>
            <p className="carritoItem">Cantidad: {product.cantidad}</p>
            <p className="carritoItem">Talle: </p>
            <p className="carritoItem">Precio: ${product.cantidad * product.price}</p>
            <button>eliminar</button>
        </div>
    )
}


export default ItemCart