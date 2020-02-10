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
      flex-wrap: wrap;
      overflow: visible;
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
