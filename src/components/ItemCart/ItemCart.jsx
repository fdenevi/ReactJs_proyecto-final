import './ItemCart.css'


const ItemCart = ({product}) => {

    return (
        <div id="productCarrito">
            <p className="titleCarritoItem">{product.name}</p>
            <p className="carritoItem">Cantidad: {product.cantidad}</p>
            <p className="carritoItem">Talle: </p>
            <p className="carritoItem">Precio: ${product.price * product.cantidad}</p>
        </div>
    )
}


export default ItemCart