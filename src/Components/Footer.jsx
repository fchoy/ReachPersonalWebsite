import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    height : 15vh;
    width : 100%;
    background-color : black;
    border-top : 1px solid rgba(255,255,255,0.5);
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
`;

const FooterTable = styled.ul`
    display : flex;
    flex-direction: row;
    width : 300px;
    justify-content: center;
    align-items: center;
    list-style-type : none;
`;
const TableItem = styled.li`
    margin : 0 auto;
`;
const Icon = styled.img`
    height : 50px;
    width : 50px;
    
    &:hover{
        cursor : pointer;
    }
`;

const IconLink = styled.a`

`;

const FooterText = styled.span`
    color : gray;
    width : 300px;
    text-align : center;
    padding-left : 30px;
    padding-top : 10px;
`;


const Footer = () => {
  return (
    <FooterDiv>
        <FooterTable>
            <TableItem><Icon src="/Images/instagramlogo.png"/></TableItem>
            <TableItem><Icon src="/Images/twitterlogo.png"/></TableItem>
            <TableItem><IconLink href='https://www.linkedin.com/in/felixchoy/' target="_blank"><Icon src="/Images/linkedinlogo.png"/></IconLink></TableItem>
        </FooterTable>
        <FooterText>© 2023 Felix Choy</FooterText>
    </FooterDiv>
  )
}

export default Footer