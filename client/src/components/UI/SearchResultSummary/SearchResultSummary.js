import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const SearchResultSummary = ({featuredMovie}) => {
  const SummaryContainer = styled.div`
    text-align: center;
    margin-top: 3vh;
    margin-left: 16px;
    margin-bottom: 16px;

    width: calc(100vw - 32px);

    background: #282c2f;
    padding: 32px 0 16px 0;
    border-radius: 10px;
    box-shadow: inset 8px 8px 16px #202426, 
                inset -8px -8px 16px #303438;

    @media (min-width: 600px) {
      padding: 48px 0 16px 0;
      width: calc(50vw - 48px);
    }

    @media (min-width: 1025px) {
      padding: 0;
      width: 33%;
      height: 90vh;
      margin: 32px 16px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
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

  const TrailerContainer = styled.div`
    overflow: hidden;
    // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
    padding-top: 56.25%;
    position: relative;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 600px) {
      width: 95%;
    }

    iframe {
      border: 0;
      border-radius: 10px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
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
        <Grid item xs={12}>
          <TrailerContainer>
            <iframe title="movie result trailer" src={featuredMovie.embedSRC} allowFullScreen></iframe>
          </TrailerContainer>
        </Grid>
      </Grid>
    </SummaryContainer>
  );
};

export default SearchResultSummary;
