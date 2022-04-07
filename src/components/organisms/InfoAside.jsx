import Counter from "../molecules/Counter"
import "./infoAside.css"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function InfoAside({ counter, setCounter, setCartList }) {
  return (
    <aside className="infoAside basis-2/5">
      <h3> SNEAKER COMPANY</h3>
      <h1> Fall Limited Edition Sneakers </h1>
      <p className="productDescription">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <h2 className="finalPrice">$125.00</h2>
        <p className="discountTag"> 50% </p>
      </div>
      <p className="originalPrice"> $250.00</p>
      <div className="btnsWrapper">
        <Counter counter={counter} setCounter={setCounter} />
        <button
          onClick={() => {
            setCartList((prevCart) => {
              return [
                ...prevCart,
                {
                  name: "Fall Limited Edition Sneakers",
                  price: parseFloat(125.0),
                  quantity: counter,
                },
              ]
            })
          }}
          className="btn p-4 bg-orange-500 border-0 basis-3/5 hover:bg-orange-200"
        >
          <AiOutlineShoppingCart /> Add to Cart
        </button>
      </div>
    </aside>
  )
}
