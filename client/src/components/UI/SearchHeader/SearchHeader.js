import React from "react";
import styled, {keyframes} from 'styled-components'
import { Movies } from "../../../lib/API"

import Octicon, { Search } from '@githubprimer/octicons-react';


const SearchHeader = (props) => {
  const handleSearchSubmit = (e) => {
      if (e.key === 'Enter'){
        const searchQuery = e.target.value
        
        Movies.search(searchQuery)
          .then(response => response.data)
          .then(data=> props.setSearchedMovieDisplay(data))
        
        e.preventDefault();
      } 
  }

  const FadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 100
  }
`;

  const HeaderBG = styled.div`
    margin-top: 10vh;
    width: 100%;
    // height: 30vh;
    background: linear-gradient(130deg, #2193B0, #68D0E9);
    border-radius: 15px;
    animation: ${FadeIn} 2s linear;

  `;

  const HeaderText = styled.h1`
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 6vw;
    font-size: 50px;
    font-weight: 600;
    width: 50%;
    line-height: 61px;
    // letter-spacing: 0.05em;
    animation: ${FadeIn} 3s linear;
  `;

  const HeaderSearchWrapper = styled.div`
    padding-left: 6vw;
    padding-bottom: 4vh;
    display: flex;
    animation: ${FadeIn} 3s linear;
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

  return (
  <>
    <HeaderBG>
        <HeaderText>
            Search and Save Your Favorite Movies
        </HeaderText>
        <HeaderSearchWrapper>
            <Octicon icon={Search} height={50}/>
            <HeaderSearchInput placeholder="Space Jam" onKeyDown={handleSearchSubmit}></HeaderSearchInput>
        </HeaderSearchWrapper>
        
    </HeaderBG>
  </>
  )
};

export default SearchHeader;
