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
    overflow: hidden;
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

  return (
    <LandingContainer>
      <HeaderContainer>
        <Octicon icon={DeviceCameraVideo} size="large"/>
        <HeaderLogo src="./img/logo-white.png" />
        <AuthForms setLoggedUser={props.setLoggedUser}/>
      </HeaderContainer>
      <HeaderArtwork src="./img/iso-entertain.png"></HeaderArtwork>
    </LandingContainer>
  );
};

export default LandingPage;
