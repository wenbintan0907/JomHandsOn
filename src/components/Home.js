import React from "react";
import styled from "styled-components";

// Styled components for Home
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  color: #333;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #555;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const handleClick = () => {
    alert("Welcome to Jom Hands-On");
  };

  return (
    <HomeWrapper>
      <Title>Welcome to Jom Hands-On Website</Title>
      <Subtitle>Jom kita maju!</Subtitle>
      <Button onClick={handleClick}>Learn More</Button>
    </HomeWrapper>
  );
};

export default Home;
