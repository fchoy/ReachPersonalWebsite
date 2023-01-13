import React from 'react'
import styled from 'styled-components';
import Footer from './Components/Footer'
import Header from './Components/Header'
import PortfolioSlider from './Components/PortfolioSlider';

const PortfolioDiv = styled.div`
  height : 100%;
`;

const Portfolio = () => {
  return (
    <PortfolioDiv>
        <Header/>
        <PortfolioSlider/>
        <Footer/>
    </PortfolioDiv>
  )
}

export default Portfolio