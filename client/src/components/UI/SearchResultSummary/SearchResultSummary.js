import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const SearchResultSummary = ({featuredMovie}) => {
  const SummaryContainer = styled.div`
    text-align: center;
    margin-top: 3vh;
    margin-bottom: 8px;
    @media (min-width: 600px) {
      // background-color: red;
      width: 50vw;
    }
  `;

  const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    padding-left: 16px;
    padding-right: 16px;
  `;

  const Label = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 4vh;
  `;

  const Plot = styled.p`
    color: rgba(255, 255, 255, 0.6);
    padding: 12px;
    font-size: 14px;
    line-height: 18px;
    margin-top: 1vh;
    margin-bottom: 3vh;
  `;

  const Details = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 3vh;
  `
  
  return (
    <SummaryContainer>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Title>{featuredMovie.Title}</Title>
        </Grid>
        <Grid item xs={4} md={4}>
          <Label>RATING</Label>
          <Details>{featuredMovie.Rated}</Details>
        </Grid>
        <Grid item xs={4} md={4}>
          <Label>YEAR</Label>
          <Details>{featuredMovie.Year}</Details>
        </Grid>
        <Grid item xs={4} md={4}>
          <Label>RUNTIME</Label>
          <Details>{featuredMovie.Runtime}</Details>
        </Grid>
        <Grid item xs={12}>
          <Plot>
            {featuredMovie.Plot}
          </Plot>
        </Grid>
      </Grid>
    </SummaryContainer>
  );
};

export default SearchResultSummary;
