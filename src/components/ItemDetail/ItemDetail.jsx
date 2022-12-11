import { FaPrayingHands, FaProcedures } from "react-icons/fa"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {

  const onAdd = (cantidad) => console.log('Cantidad de productos: ', cantidad)

  return (
    <>
      <div>
        <h2>{product.name}</h2>
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