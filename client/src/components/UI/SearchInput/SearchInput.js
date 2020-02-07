import React from "react";
import styled from "styled-components";
import Octicon, { Search } from "@githubprimer/octicons-react";

import { Movies } from "../../../lib/API";

const SearchInput = props => {
  const SearchBar = styled.div`
  // margin-top:-5px;
  `;

  const ExpandingSearchInput = styled.input`
    width: 0px;
    color: white;
    font-size: 16px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    background-color: transparent;
    border-top: none;
    border-bottom: 0px solid white;
    border-left: none;
    border-right: none;
    outline: none;

    &:focus {
      width: 100px;
      margin-left: 5px;
      // border-bottom: 2px solid white;
    }
  `;

  //inspect this function to find the re-render issue
  const handleSearchSubmit = e => {
    if (e.key === "Enter") {
      const searchQuery = e.target.value;

      Movies.search(searchQuery)
        .then(response => response.data)
        .then(data => {
          props.setMovieResult(data)
          props.setHDPoster(data.Poster.replace("X300",""))
        })

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
      .then(data => props.setMovieResult(data));

    e.preventDefault();
    return;
  };

  return (
    <SearchBar>
      <Octicon icon={Search} onClick={handleSearchClick} size={20}/>
      <ExpandingSearchInput 
      id="searchInput"
      onKeyDown={handleSearchSubmit}
      />
    </SearchBar>
  );
};

export default SearchInput;
