import React from "react";
import styled from "styled-components";

const Favorites = props => {
  const SectionLabel = styled.p`
    margin-top: 16px;
    margin-left: 16px;
    font-size: 12px;
    font-weight: 300;
  `;

  const FavoritesContainer = styled.div`
    min-width: 100%;
    min-height: 200px;
    display: flex;
    overflow-x: scroll;
    margin: 16px 8px 0 0;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 600px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
     height: calc(90vh - 48px);
     width: 50%;
     overflow-y: scroll;
     flex-wrap: wrap;
     justify-content: center;
    }
  `;

  const FavoritesCard = styled.img`
    border-radius: 10px;
    height: 300px !important;
    width: auto;
    min-width: 199px;
    max-width: 200px;
    margin: 0px 0px 16px 16px;
    filter: drop-shadow(0 0 0.3rem rgba(0,0,0,0.4));
    overflow: visible;

    @media (min-width: 600px) {
      &:hover {
        filter: drop-shadow(0 0 1rem rgba(0,0,0,1));
        position: relative;
        bottom: 16px;
      }
    }

    @media (min-width: 1025px) {
      margin: 0 8px 16px 8px;
    }
  `;

  const FavoritesBG = styled.div`
    background: #282c2f;
    width: calc(100vw - 32px);
    padding-top: 4px;
    border-radius: 10px;
    box-shadow: inset 8px 8px 16px #202426, 
                inset -8px -8px 16px #303438;
    margin-left: 16px;
    margin-bottom: 5vh;
    
    @media (min-width: 1025px) {
      width: 30%;
      margin-left: 0;
      height: 90vh;
      padding-top: 0;
      margin-top: 28px;
      margin-bottom: 0;
    }
  `;

  return (
    <FavoritesBG>
      <SectionLabel>MY FAVORITES</SectionLabel>
      <FavoritesContainer>
        {props.favs.length &&
          props.favs.map(movie => (
            <FavoritesCard
              src={movie.Poster}
              onClick={() => {
                props.setMovieResult(movie);
                props.setHDPoster(movie.Poster.replace("X300",""))
              }}
            />
          ))}
      </FavoritesContainer>
    </FavoritesBG>
  );
};

export default Favorites;
