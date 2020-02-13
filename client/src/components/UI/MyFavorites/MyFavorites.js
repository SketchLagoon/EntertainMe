import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import { Movies } from "../../../lib/API"



const MyFavorites = props => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    Movies.getMy(sessionStorage.getItem('userId'))
      .then(myFavoriteMovies => setFavorites(myFavoriteMovies.data))
      .catch(err=>console.log(err))
  }, []);

  const Card = styled.div`
    width: 100%;
    height: 30vh;
    border-radius: 15px;
    margin-bottom: 10vh;
    background-color: #41464a;
    // display: flex;
    @media (max-width: 768px) {
      height: auto;
    }
  `;

  const CardHeader = styled.div`
    width: 100%;
    height: 10vh;
    border-radius: 15px;
    top: 0;
    background: linear-gradient(130deg, #2193b0, #68d0e9);
    display: flex;

    align-items: center;
    justify-content: space-evenly;
  `;

  const CardHeaderTitle = styled.h1`
    font-size: 25px;
    font-weight: 500;
  `;

  const FavoriteSamples = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 15px;
  `;

  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>{sessionStorage.getItem('email')}'s Favorites</CardHeaderTitle>
        {/* <button>view all</button> */}
      </CardHeader>
      <Container style={{marginTop: "20px"}}>
        <Grid container spacing={3}>
          {
            favorites.length 
            && 
            favorites.map((movie)=>(
              <Grid item xs={12} md={4}>
                <FavoriteSamples src={movie.Poster} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Card>
  );
};

export default MyFavorites;
