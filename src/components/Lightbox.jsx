import React from "react";
import "./Lightbox.css";

const Lightbox = ({ images, selectedImage, setSelectedImage }) => {
  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (selectedImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="lightbox">
      <span className="close" onClick={() => setSelectedImage(null)}>
        ×
      </span>

      <button className="prev" onClick={prevImage}>
        ❮
      </button>

      <img
        src={images[selectedImage].src}
        alt=""
        className="lightbox-img"
      />

      <button className="next" onClick={nextImage}>
        ❯
      </button>
    </div>
  );
};

export default Lightbox;