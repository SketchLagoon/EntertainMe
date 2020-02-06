import React, {useState} from "react";
import styled from "styled-components";

import SearchInput from "../SearchInput/SearchInput"
import SideNav from "../SideNav/SideNav"
import ProfileBtn from "../ProfileBtn/ProfileBtn"

const NavBar = props => {
  const [open, setOpen] = useState(false);

  const NavBG = styled.div`
    height: 20px;
    width: calc(100% - 64px);
    background: #2F3437;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    top: 0;
    position: fixed;
    z-index: 99;
    filter: drop-shadow(0 0.2rem 1rem rgba(0,0,0,0.5));

  `;

  const HeaderLogo = styled.img`
    height: 20px;
    width: auto;
  `;

  return (
    <NavBG>
      <ProfileBtn open={open} setOpen={setOpen} />
      <SideNav open={open} setOpen={setOpen} setLoggedUser={props.setLoggedUser} user={props.user}/>
      <HeaderLogo src="./img/logo-white.png" />
      <SearchInput setMovieResult={props.setMovieResult} setHDPoster={props.setHDPoster}/>
    </NavBG>
  );
};

export default NavBar;
