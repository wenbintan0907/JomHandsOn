import React from "react";
import "./Activity.css";

const Makerspace091124 = () => {
  return (
    <section className="ActivityCard card card-body">
      <h1 className="ActivityHeading">
        <strong>Makerspace </strong>@ 9th November 2024
      </h1>
      <div
        id="Makerspace091124"
        className="carousel slide"
        data-bs-theme="dark"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#Makerspace091124"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#Makerspace091124"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#Makerspace091124"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#Makerspace091124"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="CarouselImage" src="Makerspace.png" />
          </div>
          <div className="carousel-item">
            <img className="CarouselImage" src="jhologo.png" />
          </div>
          <div className="carousel-item">
            <img className="CarouselImage" src="mailfdf5df.png" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#Makerspace091124"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Makerspace091124"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* content */}
      <div className="ActivityText">Add text here</div>
    </section>
  );
};

export default Makerspace091124;
