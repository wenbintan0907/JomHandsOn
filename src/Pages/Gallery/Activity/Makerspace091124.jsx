import React from "react";
import styled from "styled-components";

const ActivityCard = styled.section`
  background-color: #fdf5df;
  border-radius: 20px;
  margin: auto;
  padding: 10px;
  text-align: center;
  width: 98%;
`;

const ActivityHeading = styled.h1`
  font-size: 20px;
  letter-spacing: 3px;
  padding-top: 7px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

const ActivityText = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  margin: auto;
  padding: 10px;
  text-align: center;
  width: 98%;

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

const CarouselImage = styled.img`
  max-height: 300px;
  margin: 10px auto;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 140px;
    margin: 0px;
  }
`;

const Makerspace091124 = () => {
  return (
    <ActivityCard className="card card-body">
      <ActivityHeading>
        <strong>Makerspace </strong>@ 9th November 2024
      </ActivityHeading>
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
            <CarouselImage src="Makerspace.png" />
          </div>
          <div className="carousel-item">
            <CarouselImage src="jhologo.png" />
          </div>
          <div className="carousel-item">
            <CarouselImage src="mailfdf5df.png" />
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
      <ActivityText>Add text here</ActivityText>
    </ActivityCard>
  );
};

export default Makerspace091124;
