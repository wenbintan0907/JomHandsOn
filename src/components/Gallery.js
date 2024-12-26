import styled from "styled-components";
import Makerspace231124 from "./Activity/Makerspace231124";
import Makerspace091124 from "./Activity/Makerspace091124";
import Committee2024 from "./Activity/Committtee2024";

const MainContainer = styled.body`
  background-color: #fdf5df;
  height: auto;
  margin: 0 0 10px;
`;

const HeadingContainer = styled.section`
  background-color: #3aafa9cf;
  display: flex;
  height: 450px;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const HeadingText = styled.div`
  color: #fdf5df;
  text-shadow: 0 0 20px 100px #fdf5df;
  font-size: 60px;
  letter-spacing: 15px;
  text-align: center;
  position: absolute;
  top: 50%; /* Position 50% down from the top */
  left: 50%; /* Position 50% from the left */
  transform: translate(-50%, -50%); /* Adjust for the element's dimensions */
  z-index: 1; /* Ensure it appears above the image */
  width: auto;
`;

const BodyContainer = styled.section`
  background-color: #3aafa9;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 0;
  width: 100%;
`;

const CollapseButton = styled.p`
  background-color: #3aafa9;
  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fdf5df;
  cursor: pointer;
  font-size: 20px;
  margin: 10px 0 0;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

const DashedLine = styled.div`
  content: "";
  border-left: 5px dotted #f92c85;
  min-height: 70px;
  margin: 5px auto;
  width: 0px;

  @media (max-width: 768px) {
    min-height: 30px;
  }
`;

const ImageContainer = styled.div`
  filter: opacity(0.7);
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    margin: 0px;
  }
`;

const Heading = styled.h1`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 5rem;
  letter-spacing: -0.3rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 65%;
    letter-spacing: -0.3rem;
  }
`;

const Span = styled.span`
  margin: 0 auto;
  margin-left: 0.3em;
  display: inline-block;
  position: relative;
  filter: opacity(0.8);

  &::before {
    content: "";
    position: absolute;
    top: -0.05em;
    left: -0.1em;
    width: 140%;
    height: 110%;
    padding: 0.2em;
    z-index: -1;
  }

  &:nth-child(1) {
    font-family: "Proclamate Light", sans-serif;
    text-transform: lowercase;
    color: #ffc863;

    &::before {
      background: #332929;
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 83%);
    }
  }

  &:nth-child(2) {
    font-style: italic;
    font-family: "Playfair Display", serif;
    color: #023020;
    text-shadow: 0.02em 0.02em 0 #a52a2a, 0.03em 0.03em 0 #a52a2a;

    &::before {
      background: #f5deb3;
    }
  }

  &:nth-child(3) {
    font-family: "Satisfy", cursive;

    font-weight: 400;
    font-style: normal;
    color: #28282b;

    &::before {
      background: #a52a2a;
      clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);
    }
  }

  &:nth-child(4) {
    font-family: "Love Ya Like A Sister", cursive;
    color: #22232e;

    &::before {
      background-image: radial-gradient(
        rgba(0, 194, 203, 0.7) 3px,
        transparent 3px
      );
      background-color: #e0ffff;
      background-size: 10px 10px;
      clip-path: polygon(20% 0%, 99% 0, 100% 100%, 0% 100%);
    }
  }

  &:nth-child(5) {
    font-family: "Poppins", serif;
    color: #00c2cb;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 0.07em rgba(237, 10, 139, 0.7);

    &::before {
      background: rgba(0, 194, 203, 0.7);
      clip-path: polygon(0 0%, 100% 20%, 100% 95%, 0% 100%);
    }
  }

  &:nth-child(6) {
    font-family: "Proclamate Light", sans-serif;
    text-transform: lowercase;
    color: rgb(205, 137, 11);

    &::before {
      background: #abff33;
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 83%);
    }
  }

  &:nth-child(7) {
    font-family: "Love Ya Like A Sister", cursive;
    color: #3aafa9;

    &::before {
      background-image: radial-gradient(
        rgba(255, 194, 203, 0.7) 3px,
        transparent 3px
      );
      background-color: #ff5500;
      background-size: 10px 10px;
      clip-path: polygon(15% 0%, 99% 0, 100% 100%, 0% 100%);
    }
  }
`;

const Gallery = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>
          <Heading>
            <Span>G</Span>
            <Span>A</Span>
            <Span>L</Span>
            <Span>L</Span>
            <Span>E</Span>
            <Span>R</Span>
            <Span>Y</Span>
          </Heading>
        </HeadingText>
        <ImageContainer>
          <Image src="Committee2024.JPG" />
        </ImageContainer>
      </HeadingContainer>
      <CollapseButton
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#2025"
        aria-expanded="false"
        aria-controls="2025"
      >
        <strong>2025</strong>
      </CollapseButton>
      <div class="collapse" id="2025">
        <BodyContainer> </BodyContainer>
      </div>
      <CollapseButton
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#2024"
        aria-expanded="false"
        aria-controls="2024"
      >
        <strong>2024</strong>
      </CollapseButton>
      <div class="collapse" id="2024">
        <BodyContainer>
          <Makerspace231124 />
          <DashedLine />
          <Makerspace091124 />
          <DashedLine />
          <Committee2024 />
        </BodyContainer>
      </div>
    </MainContainer>
  );
};

export default Gallery;
