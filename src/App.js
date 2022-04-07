import "./App.css"
import Header from "./components/organisms/Header"
import Main from "./components/pages/Main"
import { useState } from "react"

function App() {
  const [cartList, setCartList] = useState([])
  const [counter, setCounter] = useState(1)

  return (
    <div className="App">
      <Header cartList={cartList} setCartList={setCartList} />
      <Main
        counter={counter}
        setCounter={setCounter}
        setCartList={setCartList}
      />
    </div>
  )
}

export default App
