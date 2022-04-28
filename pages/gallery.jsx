import Image from "next/image";
import { useEffect, useState } from "react";

// Data
import imageData from "../utils/imageData";

// Lib for Gallery
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function OurGallery() {
  const [viewData, setViewData] = useState(imageData);
  const [selected, setSelected] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(null);
  const [modalImgData, setModalImgData] = useState([]);

  // Filtering Images for the Modal based on user input

  useEffect(() => {
    setModalImgData(viewData.map((img) => img.url));
  }, [viewData]);

  return (
    <div className="mt-28 md:p-20 glimpses-div">
      <h1 className="font-bold font-big_calson text-5xl mb-12 text-center">
        Our Gallery
      </h1>

      {/* Category Buttons */}

      <div className="mx-auto grid grid-cols-2 gap-4 max-w-md w-11/12 sm:grid-cols-4 sm:max-w-xl md:max-w-none justify-between font-big_calson font-bold text-white">
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-primary transition 
          ${selected === "All" && "bg-orange-300"}`}
          onClick={() => {
            setViewData(imageData);
            setSelected("All");
          }}
        >
          All Images
        </button>
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-primary transition 
          ${selected === "Ambience" && "bg-orange-300"}`}
          onClick={() => {
            setViewData(imageData.filter((img) => img.category === "ambience"));
            setSelected("Ambience");
          }}
        >
          Our Ambience
        </button>
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-primary transition 
          ${selected === "Food" && "bg-orange-300"}`}
          onClick={() => {
            setViewData(imageData.filter((img) => img.category === "food"));
            setSelected("Food");
          }}
        >
          Our Food
        </button>
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-primary transition 
          ${selected === "Events" && "bg-orange-300"}`}
          onClick={() => {
            setViewData(imageData.filter((img) => img.category === "events"));
            setSelected("Events");
          }}
        >
          Our Events
        </button>
      </div>
      {/* Gallery Images */}
      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-3 mx-auto w-11/12 md:w-full justify-center">
        {viewData.map((img, index) => (
          <Image
            width={400}
            height={400}
            className="rounded-xl cursor-pointer hover:scale-105 transition-all"
            key={index}
            alt={img.alt}
            src={img.url}
            objectFit="cover"
            onClick={() => {
              setModalImgIndex(index);
              setModalIsOpen(true);
            }}
          />
        ))}
      </div>
      {modalIsOpen && (
        <Lightbox
          mainSrc={modalImgData[modalImgIndex]}
          nextSrc={modalImgData[(modalImgIndex + 1) % modalImgData.length]}
          prevSrc={
            modalImgData[
              (modalImgIndex + modalImgData.length - 1) % modalImgData.length
            ]
          }
          onMoveNextRequest={() =>
            setModalImgIndex((prev) => (prev + 1) % modalImgData.length)
          }
          onMovePrevRequest={() =>
            setModalImgIndex(
              (prev) => (prev + modalImgData.length - 1) % modalImgData.length
            )
          }
          onCloseRequest={() => setModalIsOpen(false)}
          imagePadding="150"
        />
      )}
    </div>
  );
}
