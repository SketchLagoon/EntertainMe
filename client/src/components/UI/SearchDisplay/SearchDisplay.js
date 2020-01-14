import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Octicon, { Star } from "@githubprimer/octicons-react";

const SearchDisplay = props => {
  const [movie, setMovie] = useState(0);

  const SpaceJam = {
    Title: "Space Jam",
    Year: "1996",
    Rated: "PG",
    Released: "15 Nov 1996",
    Runtime: "88 min",
    Genre: "Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi, Sport",
    Director: "Joe Pytka",
    Writer: "Leo Benvenuti, Steve Rudnick, Timothy Harris, Herschel Weingrod",
    Actors: "Michael Jordan, Wayne Knight, Theresa Randle, Manner Washington",
    Plot:
      "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.",
    Language: "English",
    Country: "USA",
    Awards: "5 wins & 7 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    Metascore: "59",
    imdbRating: "6.4",
    imdbVotes: "147,313",
    imdbID: "tt0117705",
    Type: "movie",
    DVD: "27 Aug 1997",
    BoxOffice: "N/A",
    Production: "Warner Home Video",
    Website: "N/A",
    Response: "True"
  }

  useEffect(()=>{
    !movie ? setMovie(SpaceJam) : setMovie(props.movie)
  },[props.movie])

  const Card = styled.div`
    width: 100%;
    height: 30vh;
    border-radius: 15px;
    marging-bottom: 10vh;
    background-color: #41464a;
  `;

  const Poster = styled.img`
    height: 100%;
    border-radius: 15px;
    position: relative;
    left: 0;
    top: 0;
  `;

  const Title = styled.h1``;

  const Details = styled.p``

  const Plot = styled.p``

  const About = styled.div`
    position: relative;
    width: 50%;
    right: 0;
    top: 0;
  `

  return (
    <Card>
      <Poster src={movie.Poster}></Poster>
      <About>
        <Octicon icon={Star} height={35}/>
        <Title>{movie.Title} • {movie.Rated}</Title>
        <Details>{movie.Year} • {movie.imdbRating} • {movie.Runtime}</Details>
        <Plot>{movie.Plot}</Plot>
      </About>
    </Card>
  );
};

export default SearchDisplay;
