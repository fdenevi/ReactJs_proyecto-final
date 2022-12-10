import Item from "../Item/Item"

const ItemList = ({products}) => {

  return (
        products.map (prods =>
          <Item 
            key={prods.id} 
            prods={prods}
          />
    )
  )
}

export default ItemList