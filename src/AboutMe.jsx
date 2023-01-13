import React from "react";
import styled from "styled-components";
import Aboutme from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const AboutMeDiv = styled.div`
    display : flex;
    flex-direction : column;
`;

const AboutMe = () => {
  return (
    <AboutMeDiv>
      <Header />
      <Aboutme />
      <Footer/>
    </AboutMeDiv>
  );
};

export default AboutMe;
