import React from 'react'
import styled from 'styled-components'
import Footer from './Components/Footer';
import Header from './Components/Header';

const ContactDiv = styled.div`
    height : 100vh;
    background-color : black;
    display : flex;
    flex-direction : column;
    background-image: url("/Images/bodybackground.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
`;

const FormDiv = styled.div`
    height : 700px;
    display : flex;
    align-items : center;
    justify-content: center;
`;


const Form = styled.form`
    display : flex;
    flex-direction : column;
    flex-wrap: wrap;
    width : 700px;
    height : 500px;
    align-items : center;
    justify-content: center;
    background-color : #bbb4b494;
`;

const ContactMeText = styled.span`
    margin-bottom : 15px;
    font-size : 24px;
    font-weight : 600;
    text-shadow: -3px 2px 1px #575757df;
`;


const FirstNameLastNameDiv = styled.div`
    display : flex;
    flex-direction : row;
`;

const FirstNameInput = styled.input`
    margin-bottom : 15px;
    margin-right : 15px;
    height : 25px;
    width : 300px;
    flex : 1;
    font-size : 16px;
    border : 1px solid white;
    border-radius : 5px;
    box-shadow : -5px 4px 1px 1px rgba(127,127,127,0.7);
`;
const LastNameInput = styled.input`
    margin-bottom : 15px;
    flex : 1;
    font-size : 16px;
    border-radius : 5px;
    border : 1px solid white;
    box-shadow : -5px 4px 1px 1px rgba(127,127,127,0.7);

`;
const EmailInputDiv = styled.div`
`;
const EmailInput = styled.input`
    margin-bottom : 15px;
    height : 25px;
    width : 505px;
    font-size : 16px;
    border-radius : 5px;
    border : 1px solid white;
    box-shadow : -5px 4px 1px 1px rgba(127,127,127,0.7);

`;
const SubjectInput = styled.input`
    margin-bottom : 15px;
    height : 25px;
    width : 505px;
    font-size : 16px;
    border-radius : 5px;
    border : 1px solid white;
    box-shadow : -5px 4px 1px 1px rgba(127,127,127,0.7);


`;
const MessageInput = styled.textarea`
    margin-bottom : 15px;
    font-size : 16px;
    width : 505px;
    height : 100px;
    display : flex;
    border-radius : 5px;
    border : 1px solid white;
    resize : none;
    box-shadow : -5px 4px 1px 1px rgba(127,127,127,0.7);

`;
const Submit = styled.input`
    font-size : 16px;
    background-color: #d4d0ce;
    border : 1px solid #d3d2d2;
    height : 30px;
    width : 100px;
    box-shadow : -5px 4px 1px 1px rgba(127,127,127,0.7);


    &:hover{
        cursor : pointer;
        background-color: #a1a1a1;
    }
`;


const Contact = () => {
  return (
    <ContactDiv>
        <Header/>
        <FormDiv>
            <Form action=''>
                <ContactMeText>Contact Me</ContactMeText>
                <FirstNameLastNameDiv>
                    <FirstNameInput type="input" placeholder='First Name' required/>
                    <LastNameInput type="input" placeholder='Last Name' required/>
                </FirstNameLastNameDiv>
                <EmailInputDiv>
                    <EmailInput type="email" placeholder='Email Address' required/>
                </EmailInputDiv>
                <SubjectInput type="input" placeholder='Subject' required/>
                <MessageInput type="input" placeholder='Message' required />
                <Submit type="button" value="Submit"/>
            </Form>
        </FormDiv>
        <Footer/>
    </ContactDiv>
  )
}

export default Contact