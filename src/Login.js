import React from 'react'
import styled from "styled-components";
import image from './Images/login-image.jpg'
import logoImg from "./Images/cta-logo-one.svg";
import logoSecImg from "./Images/cta-logo-two.png"

function Login() {
    return (
        <div className="login">
            <Container>
                <Content>
                    <LoginDiv>
                        <LogoOne src={logoImg} alt="logo_One" />
                        <LoginButton> GET THERE ALL</LoginButton>
                        <Description>
                            Get Premier Access to Raya and the  Last Dragon <br />
                            for an additional fee  with a Disney+ subscription.<br />
                            As of 03/26/21, the price of Disney+  and The <br />
                            Disney Bundle will increase by $1.

                        </Description>
                        <LogoTwo src={logoSecImg} alt="logo_two" />
                    </LoginDiv>
                    <Bgimg />
                </Content>
            </Container>
        </div>
    )
}
var Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    height:100vh;
    text-align:center;
`;

const Content = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
    width:100%;
    height:100vh;
    paddding:80px 40px;
    min-height:100vh;
`;

const Bgimg = styled.div`
     height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${image});
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const LoginDiv = styled.div`
margin-top:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:2rem;
`;

const LogoOne = styled.img`
width:100%;
margin-bottom:12px;
min-height:1px;
max-width:600px;
display:block;
`;

const LoginButton = styled.a`
width:100%;
height:auto;
font-weight:bold;
color:#f9f9f9;
padding:15px;
background-color:#0063e5;
letter-spacing:1.5px;
border-radius:4px;
border:1px solid transparent;
`;


const Description = styled.a`
    letter-spacing:1.5px;
    line-height:1.5;
    font-size:15px;
    padding-top:1rem;
    padding-bottom:1rem;

`;


const LogoTwo = styled.img`
width:100%;
margin-bottom:12px;
min-height:1px;
max-width:500px;
display:inline-block;
vertical-align:bottom;
`;

export default Login;
