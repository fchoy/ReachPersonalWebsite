import React from 'react'
import styled from 'styled-components'

const BodyDiv = styled.div`
    background-color : black;
    //background-image : url("/Images/milkywaybg.jpeg");
    height : 90vh;
    display : flex;
    flex-direction : row;
`;

const Left = styled.div`
    flex : 1;
    display : flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width : 500px;
    height : 500px;
`;


const Right = styled.div`
    display : flex;
    flex-direction: column;
    flex : 1;
    justify-content: center;
`;
const IntroductionText = styled.span`
    color : white;
    padding-bottom : 20px;
    font-size: 36px;
`;

const NameText = styled.span`
    color : #e4c414;
`;

const AboutMeText = styled.span`
    color : white;
    padding-bottom : 30px;
    font-size: 24px;
    display : flex;
    flex-wrap : wrap;
    width : 75%;
`;
const ResumeButton = styled.button`
    color : white;
    width : 120px;
    height : 50px;
    border-radius : 5px;
    cursor : pointer;
    font-size: 14px;
    background-color: black;
    border : 1px solid white;
    transition-duration : 0.25s;
    font-weight : 500;

    &:hover{
        background-color : #2b2727;
    }
`;

const ScrollText = styled.span`
    color : #e6e6e696;
    border-bottom: 1px solid #c5c5c53d;
    padding-top : 20px;
    width : fit-content;
    
    /*Makes Text Unhighlightable & Untargetable */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const HomepageBody = () => {
  return (
    <BodyDiv>
        <Left>
            <Image src="/Images/placeholder.png"></Image> {/*My Image*/}
        </Left>

        <Right>
            <IntroductionText>Hi, I'm <NameText>Felix Choy</NameText>.</IntroductionText>
            <AboutMeText>I am a Javascript & React Developer that is currently looking for an entry level Front-End Developer job.</AboutMeText>
            <ResumeButton>Download CV</ResumeButton>
            {/*<ScrollText>Scroll Down For More</ScrollText>*/}
        </Right>
    </BodyDiv>
  )
}

export default HomepageBody