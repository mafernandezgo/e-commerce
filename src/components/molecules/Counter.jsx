import { useState } from "react"

export default function Counter({ counter, setCounter }) {
  const [displayError, setDisplayError] = useState(`hidden`)

  function plusHandler() {
    setCounter(counter + 1)

    if (counter > 6) {
      setCounter(7)
      setDisplayError(`flex`)
    }
  }

  function minusHandler() {
    setCounter(counter - 1)

    if (counter < 8) {
      setDisplayError(`hidden`)
    }

    if (counter < 1) {
      setCounter(0)
    }
  }

  return (
    <div className="counter basis-2/5">
      <div className="flex basis-1/3 bg-slate-50 items-center justify-around rounded-2xl">
        <button onClick={minusHandler} className="btnCounter ">
          {" "}
          <img src={process.env.PUBLIC_URL + `assets/icon-minus.svg`} />{" "}
        </button>
        <p>{counter} </p>
        <button onClick={plusHandler} className="btnCounter">
          {" "}
          <img src={process.env.PUBLIC_URL + `assets/icon-plus.svg`} />{" "}
        </button>
      </div>
      <div
        className={` errorAlert ${displayError} alert alert-error shadow-lg basis-2/3`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>There isn't enought stock.</span>
        </div>
      </div>
    </div>
  )
}
