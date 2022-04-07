import { useState } from "react"
import Modal from "../organisms/Modal"
// import Modal from "./Modal"
export default function Carousel({
  ToggleModal,
  openModal,
  indexThumbnail,
  setIndexThumbnail,
  btnHandlerRigth,
  btnHandlerLeft,
}) {
  return (
    <div className="CarouselWrapper">
      <div className="mainImg">
        {openModal && (
          <Modal
            ToggleModal={ToggleModal}
            btnHandlerRigth={btnHandlerRigth}
            btnHandlerLeft={btnHandlerLeft}
            indexThumbnail={indexThumbnail}
            setIndexThumbnail={indexThumbnail}
          />
        )}
        <img
          onClick={ToggleModal}
          src={
            process.env.PUBLIC_URL +
            `assets/image-product-${indexThumbnail}.jpg`
          }
        ></img>
      </div>
      <div className="imagesThumbnail">
        <img
          onClick={() => {
            setIndexThumbnail(1)
          }}
          className={indexThumbnail === 1 ? "active" : ""}
          src={process.env.PUBLIC_URL + "assets/image-product-1-thumbnail.jpg"}
        ></img>
        <img
          onClick={() => {
            setIndexThumbnail(2)
          }}
          className={indexThumbnail === 2 ? "active" : ""}
          src={process.env.PUBLIC_URL + "assets/image-product-2-thumbnail.jpg"}
        ></img>
        <img
          onClick={() => {
            setIndexThumbnail(3)
          }}
          className={indexThumbnail === 3 ? "active" : ""}
          src={process.env.PUBLIC_URL + "assets/image-product-3-thumbnail.jpg"}
        ></img>
        <img
          onClick={() => {
            setIndexThumbnail(4)
          }}
          className={indexThumbnail === 4 ? "active" : ""}
          src={process.env.PUBLIC_URL + "assets/image-product-4-thumbnail.jpg"}
        ></img>
      </div>
    </div>
  )
}
