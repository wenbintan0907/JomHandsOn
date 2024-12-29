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

const Image = styled.img`
  max-height: 300px;
  margin: 10px auto;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 140px;
    margin: 0px;
  }
`;

const Committee2024 = () => {
  return (
    <ActivityCard className="card card-body">
      <ActivityHeading>
        <strong>Jom Hands-On Committee 2024</strong>
      </ActivityHeading>
      <div>
        <Image src="Committee2024.JPG" alt="JHO Committee 2024" />
      </div>
      {/* content */}
      <ActivityText>Add text here</ActivityText>
    </ActivityCard>
  );
};

export default Committee2024;
