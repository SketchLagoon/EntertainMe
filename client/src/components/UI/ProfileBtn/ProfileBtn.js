import React from "react";
import styled from "styled-components";
import Octicon, { Person, X } from "@githubprimer/octicons-react";

const ProfileBtn = ({ open, setOpen }) => {
  const Btn = styled.div`
    color: white;
    z-index: 99;
    height:20px;
  `;

  return (
    <Btn open={open} onClick={() => setOpen(!open)}>
      {open ? <Octicon icon={X} /> : <Octicon icon={Person} size={20}/>}
    </Btn>
  );
};

export default ProfileBtn;
