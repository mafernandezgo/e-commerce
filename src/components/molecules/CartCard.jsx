import { BsTrash } from "react-icons/bs"
export default function CartCard({
  name,
  price,
  quantity,
  removeFromCart,
  priceTotal,
}) {
  return (
    <div className="CartCard">
      <p>{name}</p>
      <p>
        {`${quantity} x $ ${price}.00`} <b>{`$${priceTotal}.00`}</b>
      </p>
      <button className="CartCard-deleteButton" onClick={removeFromCart}>
        <BsTrash />
      </button>
    </div>
  )
}
