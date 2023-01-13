import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  background-color : black;
  align-items : center;
  justify-content: center;
  border-bottom : 1px solid rgba(255,255,255,0.5);

`;

const Left = styled.div`
  flex: 1.15;
  display : flex;
  flex-direction : row;
  height : 100px;
  border-right : 1px solid rgba(255,255,255,0.5);
  align-items : center;
`;
const Icon = styled.img`
  padding-left : 125px;
  width : 50px;
  height : 50px;
  padding-right : 25px;
`;
const Name = styled.span`
  color : white;
  font-size : 30px;
  font-family: 'Yeon Sung', cursive;
`;

const Right = styled.div`
  flex: 1;
`;
const NavbarList = styled.ul`
  display : flex;
  flex-direction : row;
  justify-content: space-evenly;
  list-style: none;
`;
const NavbarItem = styled.li`
`;

//style our React Router Link component using the styled() method 
const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`



const Header = () => {
  return (
    <HeaderDiv>
      <Left>
        <Icon src='/Images/globeicon.png'/>
        <Name>Felix Choy</Name>
      </Left>

      <Right>
        <NavbarList>
          <NavbarItem><HeaderLink to="/" className="link">Home</HeaderLink></NavbarItem>
          <NavbarItem><HeaderLink to="/aboutme" className="link">About Me</HeaderLink></NavbarItem>
          <NavbarItem><HeaderLink to="/portfolio" className="link">Portfolio</HeaderLink></NavbarItem>
          <NavbarItem><HeaderLink to="/contact" className="link">Contact</HeaderLink></NavbarItem>
        </NavbarList>
      </Right>
    </HeaderDiv>
  );
};

export default Header;
