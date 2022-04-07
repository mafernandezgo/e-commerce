import CartCard from "../molecules/CartCard"
import { nanoid } from "nanoid"
import { useState } from "react"

export default function CartList({ cartList, setCartList }) {
  const [showTotal, setShowTotal] = useState(false)
  cartList = cartList.map((element) => {
    return {
      ...element,
      priceTotal: element.price * element.quantity,
      id: nanoid(),
    }
  })

  let initialValue = 0
  let totalPrice = cartList.reduce(
    (prev, curr) => prev + curr.priceTotal,
    initialValue
  )

  function removeFromCart(element) {
    const itemToDelete = cartList.filter((items) => items.id === element.id)
    const index = cartList.findIndex((item) => item.id === element.id)
    const nuevoArray = cartList.splice(index, 1)
    setCartList(cartList)
  }

  return (
    <div className="CartList">
      <section>
        {cartList.map((element) => {
          let index = cartList.indexOf(element)
          return (
            <CartCard
              key={index}
              name={element.name}
              price={element.price}
              quantity={element.quantity}
              priceTotal={element.priceTotal}
              removeFromCart={() => removeFromCart(element)}
            />
          )
        })}
      </section>
      <footer
        onMouseOver={() => setShowTotal(true)}
        onMouseLeave={() => setShowTotal(false)}
        className="CartList-Footer flex flex-col"
      >
        <button className="btn p-4 bg-orange-500 border-0 basis-3/5 hover:bg-orange-200">
          {showTotal ? <p>{`Total $ ${totalPrice}.00`}</p> : <p>Checkout</p>}
        </button>
      </footer>
    </div>
  )
}
