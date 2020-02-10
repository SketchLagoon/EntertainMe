import React from "react";
import styled from "styled-components";
import { Movies } from "../../../lib/API";

import Octicon, { Search } from "@githubprimer/octicons-react";

const SearchHeader = props => {
  //inspect this function to find the re-render issue
  const handleSearchSubmit = e => {
    if (e.key === "Enter") {
      const searchQuery = e.target.value;

      Movies.search(searchQuery.replace(".",""))
        .then(response => response.data)
        .then(data => {
          props.setMovieResult(data)
          console.log(data)
          props.setHDPoster(data.Poster.replace("X300",""))
          console.log(data.Poster.replace("X300",""))
        });

      e.preventDefault();
      return;
    }
  };

  const handleSearchClick = e => {
    const searchQuery = document.getElementById("searchInput").value;

    if (searchQuery === "") {
      return
    }
    
    Movies.search(searchQuery)
      .then(response => response.data)
      .then(data => {
        props.setMovieResult(data)
        console.log(data)
        props.setHDPoster(data.Poster.replace("X300",""))
        console.log(data.Poster.replace("X300",""))
      });

    e.preventDefault();
    return;
  };

  //   const FadeIn = keyframes`
  //   from {
  //     opacity: 0
  //   }
  //   to {
  //     opacity: 100
  //   }
  // `;
  // animation: ${FadeIn} 2s linear;

  const HeaderBG = styled.div`
    width: 90vw;
    margin: 10vh auto;
    // height: 30vh;
    background: linear-gradient(130deg, #2193b0, #68d0e9);
    border-radius: 15px;
  `;

  const HeaderText = styled.h1`
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 6vw;
    font-size: 50px;
    font-weight: 600;
    width: 50%;
    line-height: 61px;
    @media (max-width: 768px) {
      font-size: 25px;
      line-height: 31px;
      width: 80%;
    }
  `;

  const HeaderSearchWrapper = styled.div`
    padding-left: 6vw;
    padding-bottom: 4vh;
    display: flex;
  `;

  const HeaderSearchInput = styled.input`
    margin-left: 15px;
    margin-top: -5px;
    background: rgba(0, 0, 0, 0);
    color: white;
    font-size: 25px;
    font-weight: 300;
    border: none;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.33);
      transition: color 0.5s;
      font-weight: 200;
    }

    &:hover {
      &::placeholder {
        color: rgba(255, 255, 255, 0.66);
        transition: color 0.5s;
      }
    }

    &:focus {
      filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.3));
      &::placeholder {
        color: rgba(255, 255, 255, 0);
        transition: color 0.5s;
      }
    }
  `;

  const SearchIconWrapper = styled.div``;

  return (
    <>
      <HeaderBG>
        <HeaderText>Search & Save Your Favorite Shows & Movies</HeaderText>
        <HeaderSearchWrapper>
          <SearchIconWrapper onClick={handleSearchClick}>
            <Octicon icon={Search} height={50} />
          </SearchIconWrapper>
          <HeaderSearchInput
            id="searchInput"
            placeholder="Space Jam"
            onKeyDown={handleSearchSubmit}
          ></HeaderSearchInput>
        </HeaderSearchWrapper>
      </HeaderBG>
    </>
  );
};

export default SearchHeader;
