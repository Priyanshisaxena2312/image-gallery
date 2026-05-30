import React, { useState } from "react";
import "./Gallery.css";
import images from "../data/image.jsx";
import Lightbox from "./Lightbox.jsx";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Nature", "City", "Animals"];

  const filteredImages = images.filter((img) => {
    const categoryMatch =
      filter === "All" || img.category === filter;

    const searchMatch =
      img.title?.toLowerCase().includes(search.toLowerCase()) ||
      img.category?.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="gallery-container">
      <nav className="navbar">
        <div className="logo">📷 Image Gallery</div>

        <div className="nav-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="text"
          className="search-bar"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className="gallery">
        {filteredImages.map((image, index) => (
          <div className="card" key={image.id}>
            <img
              src={image.src}
              alt={image.title}
              onClick={() => setSelectedImage(index)}
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <Lightbox
          images={filteredImages}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default Gallery;