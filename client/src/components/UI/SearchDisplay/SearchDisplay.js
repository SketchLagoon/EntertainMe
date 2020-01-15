import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Octicon, { Star } from "@githubprimer/octicons-react";

const SearchDisplay = props => {
  const [movie, setMovie] = useState(0);

  const SpaceJam = {
    Title: "Space Jam",
    Year: "1996",
    Rated: "PG",
    Runtime: "88 min",
    Plot:
      "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    imdbRating: "6.4"
  };

  useEffect(() => {
    !movie ? setMovie(SpaceJam) : setMovie(props.movie);
  }, [props.movie]);


  const Card = styled.div`
    width: 100%;
    height: 30vh;
    border-radius: 15px;
    marging-bottom: 10vh;
    background-color: #41464a;
    display: flex;
    align-items: center;
  `;

  const Poster = styled.img`
    height: 100%;
    border-radius: 15px;
    position: relative;
    left: 0;
    top: 0;
  `;

  const Title = styled.h1`
    margin-top: 8px;
    font-size: 25px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  `;

  const Details = styled.p`
    margin-top: 12px;
    font-weight: 300;
  `;

  const Plot = styled.p`
    margin-top: 8px;
    opacity: 0.5;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 14px;
      opacity: 0.7;
      font-weight: 400;
    }
  `;

  const About = styled.div`
    width: 38%;
    margin: 0 auto;
  `;

  const StarIcon = styled.div`
    position: absolute;
    z-index: 10;
    margin: 9% 0 0 1%;
    color: rgba(255,255,255,0.75);

    :hover {
        color: rgba(255,255,255,1);
    }

    @media (max-width: 768px) {
      margin-top: 18%;
      margin-left: 2%;
    }
  `;


  return (
    <Card>
      <StarIcon onClick={()=>{props.favorite(movie)}}>
        <Octicon icon={Star} height={50} />
      </StarIcon>
      <Poster src={movie.Poster}></Poster>
      <About>
        <Title>
          {movie.Title} • {movie.Rated}
        </Title>
        <Details>
          {movie.Year} • {movie.imdbRating}/10 • {movie.Runtime}
        </Details>
        <Plot>{movie.Plot}</Plot>
      </About>
    </Card>
  );
};

export default SearchDisplay;
