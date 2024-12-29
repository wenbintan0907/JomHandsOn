{
  /* import Makerspace231124 from "./Activity/Makerspace231124.jsx";
import Makerspace091124 from "./Activity/Makerspace091124.jsx";
import Committee2024 from "./Activity/Committee2024.jsx"; */
}
import "./Gallery.css";

const Gallery = () => {
  return (
    <body className="MainContainer">
      <section className="HeadingContainer">
        <div className="HeadingText">
          <h1 className="Heading">
            <span className="Span">G</span>
            <span className="Span">A</span>
            <span className="Span">L</span>
            <span className="Span">L</span>
            <span className="Span">E</span>
            <span className="Span">R</span>
            <span className="Span">Y</span>
          </h1>
        </div>
        <div className="ImageContainer">
          <img className="Image" src="src/assets/Team3.JPG" />
        </div>
      </section>
      <p
        className="CollapseButton"
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#2025"
        aria-expanded="false"
        aria-controls="2025"
      >
        <strong>2025</strong>
      </p>
      <div class="collapse" id="2025">
        <section className="BodyContainer"> </section>
      </div>
      <p
        className="CollapseButton"
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#2024"
        aria-expanded="false"
        aria-controls="2024"
      >
        <strong>2024</strong>
      </p>
      <div class="collapse" id="2024">
        <section className="BodyContainer">
          {/* <Makerspace231124 />
          <div className="DashedLine" />
          <Makerspace091124 />
          <div className="DashedLine" />
          <Committee2024 /> */}
        </section>
      </div>
    </body>
  );
};

export default Gallery;
