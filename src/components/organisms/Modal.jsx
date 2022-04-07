import Carousel from "../molecules/Carousel"
import { AiOutlineClose } from "react-icons/ai"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

export default function Modal({
  ToggleModal,
  openModal,
  btnHandlerRigth,
  btnHandlerLeft,
  indexThumbnail,
  setIndexThumbnail,
}) {
  console.log(indexThumbnail)
  return (
    <div className="Modal">
      <section className="mainModal">
        <div onClick={ToggleModal} className="iconClose">
          <AiOutlineClose />
        </div>
        <button
          className="btnCarousel btnCarousel-Previous"
          onClick={btnHandlerLeft}
        >
          <MdNavigateBefore />
        </button>
        <Carousel
          ToggleModal={ToggleModal}
          openModal={openModal}
          indexThumbnail={indexThumbnail}
          setIndexThumbnail={setIndexThumbnail}
        />
        <button
          className="btnCarousel btnCarousel-Next"
          onClick={btnHandlerRigth}
        >
          <MdNavigateNext />
        </button>
      </section>
    </div>
  )
}
