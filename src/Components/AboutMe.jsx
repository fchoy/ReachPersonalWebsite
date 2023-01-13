import React from "react";
import styled from "styled-components";

const AboutMeBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  //border-top: 1px solid rgba(255, 255, 255, 0.5);
  background-color: black;
  justify-content: center;
`;

const IntroDiv = styled.div`
  height: 60%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const IntroHeader = styled.h1`
  //color : #c9ae15;
  color: #e4c514df;
  font-size: 48px;
  padding-top: 20px;
  height: fit-content;
  text-align: center;
`;

const IntroText = styled.p`
  color: white;
  width: 100%;
  margin: 30px 0px;
  font-size: 20px;
  text-align: center;
`;

const TechnicalSkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  height : fit-content;
`;

const TechnicalSkillsIconDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const TechnicalSkillsIcon = styled.img`
  height : ${props => props.height};
  width : ${props => props.width};
  padding-top : ${props => props.paddingTop};
`;

const ProficientSkillsDiv = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;
const SkillsText = styled.h3`
  color: #${(props) => props.color};
  text-decoration: underline solid white 1px;
  text-underline-offset: 6px;
`;

const WorkedWithDiv = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const LearningDiv = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const AboutMe = (props) => {
  return (
    <AboutMeBodyDiv>
      <IntroDiv>
        <IntroHeader>About Me</IntroHeader>
        <IntroText>
          I am a recent California State University, East Bay graduate with a
          bachelor's degree in computer science
          <br />
          that is passionate about front-end web development.
        </IntroText>
        <IntroText>
          During my time at East Bay, I took relevant courses such as Data
          Structures and Algorithms, Website Development,
          <br />
          and Android Development that taught me the foundational skills such as
          HTML, CSS, and Javascript needed to start my path in web development.
        </IntroText>

        <IntroText>
          I have also dabbled in back-end technologies and languages such as
          Java and have some experience with JSP, Javabeans, and MySQL through school
          assignments.
        </IntroText>

        <IntroText>
          Currently in my freetime I am teaching myself to build web applications
          with Javascript and React.js.
        </IntroText>
      </IntroDiv>

      <TechnicalSkillsDiv>
        <ProficientSkillsDiv>
          <SkillsText color="8f8fff">
            Technologies and Languages That I am Proficient in
          </SkillsText>
          <TechnicalSkillsIconDiv>
            <TechnicalSkillsIcon paddingTop="10px" src="/Icons/htmllogo.png" height="100px" width="100px"></TechnicalSkillsIcon>
            <TechnicalSkillsIcon paddingTop="10px"src="/Icons/css3.png" height="100px" width="100px"></TechnicalSkillsIcon>
          </TechnicalSkillsIconDiv>
        </ProficientSkillsDiv>

        <WorkedWithDiv>
          <SkillsText color="ffc04a">
            Technologies and Languages That I have Previously Worked With
          </SkillsText>
          <TechnicalSkillsIconDiv>
            <TechnicalSkillsIcon paddingTop="20px" src="/Icons/c++.png" height="80px" width="75px"></TechnicalSkillsIcon>
            <TechnicalSkillsIcon paddingTop="15px" src="/Icons/javalogo.png" height="90px" width="135px"></TechnicalSkillsIcon>
          </TechnicalSkillsIconDiv>
        </WorkedWithDiv>

        <LearningDiv>
          <SkillsText color="f75c5c">
            Technologies and Languages That I am Learning
          </SkillsText>
          <TechnicalSkillsIconDiv>
              <TechnicalSkillsIcon paddingTop="15px"src="/Icons/reactlogo.png" height="80px" width="80px"></TechnicalSkillsIcon>
              <TechnicalSkillsIcon paddingTop="15px"src="/Icons/jslogo.png" height="80px" width="80px"></TechnicalSkillsIcon>
            </TechnicalSkillsIconDiv>
        </LearningDiv>
      </TechnicalSkillsDiv>
    </AboutMeBodyDiv>
  );
};

export default AboutMe;
