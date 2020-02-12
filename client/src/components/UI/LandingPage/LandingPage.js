import React from "react";
import styled, { keyframes } from "styled-components";
import Octicon, { DeviceCameraVideo } from "@githubprimer/octicons-react";

import AuthForms from "../../AuthForms/AuthForms";

const LandingPage = props => {
  const FadeIn = keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  `;





  const LandingContainer = styled.div`
  background: linear-gradient(135deg, #2193b0, #68d0e9);
  width: 100vw;
  height: 100vh;
  overflow: hidden !important;
  `

  const FormContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: hidden !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  `;

  const HeaderLogo = styled.img`
    // height: 20px;
    width: 200px;
    margin-bottom: 4vh;
  `;

  const HeaderContainer = styled.div`
    animation: ${FadeIn} 2s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin-bottom: 20vh;
  `
  const HeaderArtwork = styled.img`
    animation: ${FadeIn} 2s linear;
    width: 30vh;
    margin-top: 5vh;
    
    @media (min-width: 600px) {
      flex-direction: row;
      margin-top: 0;
      margin-left: 10vw;
    }
  `;


  const Circle1 = styled.div`
  animation: ${FadeIn} 3s linear;
  height: 100vh;
  width: 100vh;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  position: relative;
  z-index: 0;
  top: -25vh;
  left: -12vh;
  
  @media (min-width: 1025px) {
    height: 90vw;
    width: 90vw;
  }
  `

  const Circle2 = styled.div`
  animation: ${FadeIn} 3s linear;
  height: 90vh;
  width: 90vh;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  position: relative;
  z-index: 0;
  top:-50vh;

  @media (min-width: 1025px) {
    height: 90vw;
    width: 90vw;
    top:-120vh;
    right: -75vh;
  }
 `
  return (
    <LandingContainer>
      <FormContainer>
        <HeaderContainer>
          <Octicon icon={DeviceCameraVideo} size="large"/>
          <HeaderLogo src="./img/logo-white.png" />
          <AuthForms setLoggedUser={props.setLoggedUser}/>
        </HeaderContainer>
        <HeaderArtwork src="./img/iso-entertain.png"></HeaderArtwork>
      </FormContainer>
      <Circle1/>
      <Circle2/>
    </LandingContainer>
  );
};

export default LandingPage;
