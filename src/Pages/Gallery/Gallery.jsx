import Makerspace231124 from "./Activity/Makerspace231124.jsx";
import Makerspace091124 from "./Activity/Makerspace091124.jsx";
import Committee2024 from "./Activity/Committee2024.jsx";

import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [isCollapsed2024, setIsCollapsed2024] = useState(false);
  const [isCollapsed2025, setIsCollapsed2025] = useState(false);

  return (
    <body className="MainContainer">
      <section className="HeadingContainer">
        <div className="HeadingText">
          <h1 className="Heading">
            <span className="Span">GALLERY</span>
          </h1>
        </div>
        <div className="ImageContainer">
          <img className="Image" src="src/assets/Team3.JPG" />
        </div>
      </section>
      <button
        className="CollapseButton"
        onClick={() => setIsCollapsed2025(!isCollapsed2025)}
      >
        2025
      </button>
      {isCollapsed2025 && <div className="BodyContainer"></div>}

      <button
        className="CollapseButton"
        onClick={() => setIsCollapsed2024(!isCollapsed2024)}
      >
        2024
      </button>
      {isCollapsed2024 && (
        <div className="BodyContainer">
          <Makerspace231124 />
          <div className="DashedLine" />
          <Committee2024 />
        </div>
      )}
    </body>
  );
};
export default Gallery;
