import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {slides} from "../portfoliodata";

const PortfolioSliderDiv = styled.div`
  height: 100vh;
  display: flex;
  background-color: black;
  position : relative;
  background-image: url("/Images/greyportfoliobg.webp");
  overflow : hidden;

`;

const ArrowDiv = styled.div`
  width : 50px;
  height: 50px;
  border-radius: 50%;
  display : flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color : #474747;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  cursor: pointer;
  position : absolute;
  top : 0;
  bottom : 0;
  opacity : 0.7;
  z-index : 2;
`;

const LeftArrow = ({ className }) => <ArrowBackIosIcon className={className} />;

const StyledLeftArrow = styled(LeftArrow)`
  color: white;
  margin: auto 0;
 `;

const RightArrow = ({ className }) => (
  <ArrowForwardIosIcon className={className} />
);

const StyledRightArrow = styled(RightArrow)`
  color: white;
  margin: auto 0;
`;

const PortfolioSliderBody = styled.div`
  height : 100%;
  display : flex;
  flex-direction: row;
  transform : translateX(${props => props.slideIndex * -100}vw);
  transition : 0.4s;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  width : 100vw;
`;

const Left = styled.div`
  flex : 1;
  margin: auto 0;
  text-align: center;
`;
const Right = styled.div`
  flex : 1;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  align-items : center;
`;
const ProjectImage = styled.img`
  width: ${props => props.width}px;
  height: 500px;
  padding-left : 60px;
`;

const ProjectTitle = styled.h1`
  color : white;
  padding-bottom : 30px;
`;

const ProjectDescription = styled.span`
  color : #ffffff;
  margin-bottom: 40px;
  font-size : 18px;
  letter-spacing : 2px;
  width : 800px;
  text-align: center;

`;
const ProjectLinkButton = styled.button`
  width: 100px;
  height : 50px;
  margin : 0 auto;
  cursor : pointer;
`;

const GithubLink = styled.a`
  text-decoration : none;
  font-size : 14px;
`;

const PortfolioSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    }
    else if(direction === "right"){
      setSlideIndex(slideIndex < 2? slideIndex + 1 : 0);
    }
  }

  return (
    <PortfolioSliderDiv>
      <ArrowDiv direction="left" onClick={() => handleClick("left")}>
        <StyledLeftArrow />
      </ArrowDiv>

      <PortfolioSliderBody slideIndex={slideIndex}>
        {slides.map((item) => (
          <Slide>
          <Left>
            <ProjectImage width={item.width} src={item.img}/>
          </Left>
          <Right>
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDescription>{item.description}</ProjectDescription>
            <ProjectLinkButton><GithubLink href={item.link} target="_blank">Github</GithubLink></ProjectLinkButton>
          </Right>
        </Slide>
        ))}
      </PortfolioSliderBody>

      <ArrowDiv onClick={() => handleClick("right")} direction="right">
        <StyledRightArrow />
      </ArrowDiv>
    </PortfolioSliderDiv>
  );
};

export default PortfolioSlider;
