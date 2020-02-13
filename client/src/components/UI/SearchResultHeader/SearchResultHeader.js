import React from "react";
import styled from "styled-components";
import Octicon, { Heart } from "@githubprimer/octicons-react";

const SearchResultHeader = props => {
  const HeroImage = styled.img`
    margin: 70px 16px 0 16px;
    width: calc(100% - 32px);
    border-radius: 10px 10px 10px 10px;
    filter: drop-shadow(0 1rem 0.3rem rgba(0, 0, 0, 0.2));

    @media (min-width: 1025px) {
      width: auto;
      height: 90vh;
    }
  `;

  const FavButton = styled.div`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #2193b0, #68d0e9);
    margin-left: calc(50% - 32px);
    margin-top: -32px;
    filter: drop-shadow(0 0.2rem 0.3rem rgba(0, 0, 0, 0.5));
  `;
  
  const DesktopWidth = styled.div`
    @media (min-width: 600px) {
      width: 50vw;
    }
    @media (min-width: 1025px) {
      width: auto;
    }
  `;

  return (
    <DesktopWidth>
      <HeroImage src={props.poster} />
      <FavButton onClick={() => {props.handleFavorite(props.movieResult);}}>
        <Octicon icon={Heart} size="medium" />
      </FavButton>
    </DesktopWidth>
  );
};

export default SearchResultHeader;
