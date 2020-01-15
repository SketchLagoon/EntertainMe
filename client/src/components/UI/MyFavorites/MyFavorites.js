import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";


const MyFavorites = props => {
  const [favorites, setFavorites] = useState([]);

  const [user, setUser] = useState("email@email.com");

  useEffect(() => {
    setUser(props.user);
    //call to api to find user's favorite movies
  }, [props.user]);

  const Card = styled.div`
    width: 100%;
    height: 30vh;
    border-radius: 15px;
    marging-bottom: 10vh;
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
    border-radius: 15px;
  `;

  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>{user}</CardHeaderTitle>
        <button>view all</button>

      </CardHeader>
      <Container style={{marginTop: "20px"}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FavoriteSamples src="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FavoriteSamples src="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FavoriteSamples src="https://m.media-amazon.com/images/M/MV5BMDgyZTI2YmYtZmI4ZC00MzE0LWIxZWYtMWRlZWYxNjliNTJjXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg" />
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default MyFavorites;
