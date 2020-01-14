import React from "react";

import styled from 'styled-components'


const Background = () => {
  const BackgroundWrapper = styled.div`
  height: 110vh;
  width: 100vw;
  position: absolute;
  z-index: -2;
  overflow: hidden;
  background-color: #2F3437;
  `

  const BackgroundHeader = styled.div`
  height: 30vh;
  width: 100vw;
  background-color: #41464A;
  `
  return (
    <BackgroundWrapper>
        <BackgroundHeader>
        </BackgroundHeader>
    </BackgroundWrapper>
  )
};

export default Background;
