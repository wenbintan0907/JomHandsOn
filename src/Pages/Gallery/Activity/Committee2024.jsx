import React from "react";
import "./Activity.css";
import Carousel from "react-bootstrap/Carousel";

const Committee2024 = () => {
  return (
    <section className="ActivityCard card card-body">
      <h1 className="ActivityHeading">
        <strong>Jom Hands-On Committee 2024</strong>
      </h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block CarouselImage" src="src\assets\Team1.JPG" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="ActivityText">FOUNDERS</div>
          <img
            className="d-block CarouselImage"
            src="src\assets\Founders\Founders.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="ActivityText">FINANCE</div>
          <img
            className="d-block CarouselImage"
            src="src\assets\Finance Dept\TreasurerFundraising.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="ActivityText">SECRETARY & OUTREACH</div>
          <img
            className="d-block CarouselImage"
            src="src/assets/Secretary and Outreach/Secr(L) Outr(R)(1).JPG"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="ActivityText">SCIENCE</div>
          <img
            className="d-block CarouselImage"
            src="src\assets\Science dept\Science.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="ActivityText">PUBLICITY</div>
          <img
            className="d-block CarouselImage"
            src="src\assets\Publicity Dept\Publicity.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="ActivityText">IT</div>
          <img
            className="d-block CarouselImage"
            src="src\assets\IT Dept\IT.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
{
  /*adawd*/
}
export default Committee2024;
