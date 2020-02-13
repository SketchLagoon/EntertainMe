import React from "react";
import styled, { keyframes } from "styled-components";

import AuthForms from "../../AuthForms/AuthForms";

const SideNav = ({ open, setLoggedUser, user }) => {

  const StyledMenu = styled.nav`
    display: ${open?"flex":"none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #2193b0, #68d0e9);
    height: calc(100vh - 4rem);
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 40vw;
    border-radius: 0 10px 10px 0;
    overflow: hidden;

    @media (max-width: 576px) {
      width: 70vw;
    }
  `;

  const SideNavImg = styled.img`
    width: 200%;
    bottom: -100px;
    right: -250px;    
    opacity: 0.15;
    position: absolute;
    z-index: 0;

    @media (min-width: 600px) {
      width: auto;
    }
  `

  const LogoutButton = styled.button`
    width: 250px;
    padding: 8px 12px;
    margin: 16px 0;
    font-size: 16px;
    border-style: solid;
    border-width: 3px;
    border-color: rgba(255, 255, 255, 0.33);
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.66);
    color: #2193b0;
    font-weight: 400;
    position: relative;
    z-index: 2;

    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.3);
    }
  `;

const FadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 100;
}
`;

const Circle1 = styled.div`
animation: ${FadeIn} 3s linear;
height: 100vh;
width: 100vh;
background-color: rgba(255,255,255,0.1);
border-radius: 50%;
position: absolute;
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
position: absolute;
z-index: 0;
top:-50vh;

@media (min-width: 1025px) {
  height: 90vw;
  width: 90vw;
  top:-120vh;
  right: -75vh;
}
`

  const logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <StyledMenu open={open}>
      {
      user === null ? 
      ( <AuthForms setLoggedUser={setLoggedUser} />) : 
      ( <>
          <h1>{user}</h1>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
          <SideNavImg src="./img/iso-entertain.png"></SideNavImg>
          <Circle1></Circle1>
          <Circle2></Circle2>
      </> )
      }
    </StyledMenu>
  );
};

export default SideNav;
