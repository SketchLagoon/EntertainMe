import React from "react";
import styled from "styled-components";

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

    @media (max-width: 576px) {
      width: 70vw;
    }
  `;

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

    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.3);
    }
  `;

  const logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <StyledMenu open={open}>
      {user === null ? (
        <AuthForms setLoggedUser={setLoggedUser} />
      ) : (
        <>
          <h1>{user}</h1>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </>
      )}
    </StyledMenu>
  );
};

export default SideNav;
