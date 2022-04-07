import ImagesAside from "../organisms/ImagesAside"
import InfoAside from "../organisms/InfoAside"
import { useState } from "react"

export default function Main({ counter, setCounter, setCartList }) {
  const [openModal, setOpenModal] = useState(false)
  const [indexThumbnail, setIndexThumbnail] = useState(1)

  function ToggleModal() {
    setOpenModal(!openModal)
  }

  function btnHandlerRigth() {
    setIndexThumbnail(indexThumbnail + 1)
    if (indexThumbnail > 3) {
      setIndexThumbnail(1)
    }
  }

  function btnHandlerLeft() {
    setIndexThumbnail(indexThumbnail - 1)
    if (indexThumbnail < 2) {
      setIndexThumbnail(4)
    }
  }

  return (
    <section className="main">
      <ImagesAside
        ToggleModal={ToggleModal}
        openModal={openModal}
        indexThumbnail={indexThumbnail}
        setIndexThumbnail={setIndexThumbnail}
        btnHandlerLeft={btnHandlerLeft}
        btnHandlerRigth={btnHandlerRigth}
      />
      <InfoAside
        counter={counter}
        setCounter={setCounter}
        setCartList={setCartList}
      />
    </section>
  )
}
