import CartList from "./CartList"
import "./header.css"

export default function Header({ cartList, setCartList }) {
  return (
    <nav className="nav">
      <div className="navbar bg-base-100 mb-40 shadow-xl rounded-box justify-between">
        <div className="flex basis-3/5">
          <img
            className="basis-1/4"
            src={process.env.PUBLIC_URL + "assets/logo.svg"}
          />
          <ul className=" flex flex-row justify-around basis-3/4">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex-none basis-1/5 justify-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={process.env.PUBLIC_URL + "assets/icon-cart.svg"} />
                <span className="badge badge-sm indicator-item bg-orange-500 border-0">
                  {cartList.length}
                </span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-auto min-w-max"
            >
              <div className="CartTitle">Cart</div>
              {cartList.length > 0 ? (
                <CartList cartList={cartList} setCartList={setCartList} />
              ) : (
                <div>The Cart Is Empty</div>
              )}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {" "}
                <a className="justify-between"> Profile </a>{" "}
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
