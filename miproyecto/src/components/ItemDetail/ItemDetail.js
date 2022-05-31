const ItemDetail = ({data}) => {
  const { title, price, description } = data;
  console.log("Data desde ItemDetail: ", data)
  return (
      <div>
          <h2>{title}</h2>
          <p>{price}</p>
          <p>{description}</p>
      </div>
  )
}

export default ItemDetail