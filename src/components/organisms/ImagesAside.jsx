import { useState } from "react"
import Carousel from "../molecules/Carousel"
import "./imagesAside.css"
import Modal from "./Modal"

export default function ImagesAside({
  ToggleModal,
  openModal,
  indexThumbnail,
  setIndexThumbnail,
  btnHandlerRigth,
  btnHandlerLeft,
}) {
  return (
    <aside className="imagesAside flex">
      <Carousel
        ToggleModal={ToggleModal}
        openModal={openModal}
        indexThumbnail={indexThumbnail}
        setIndexThumbnail={setIndexThumbnail}
        btnHandlerRigth={btnHandlerRigth}
        btnHandlerLeft={btnHandlerLeft}
      />
    </aside>
  )
}
