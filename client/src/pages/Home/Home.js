import React, { useState } from "react";
import { Container, Grid } from '@material-ui/core';

import AuthForms from "../../components/AuthForms/AuthForms";

import Background from "../../components/UI/Background/Background"
import SearchHeader from "../../components/UI/SearchHeader/SearchHeader"
import SearchDisplay from "../../components/UI/SearchDisplay/SearchDisplay"
import MyFavorites from "../../components/UI/MyFavorites/MyFavorites"

import { Movies } from "../../lib/API"

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #2F3437;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: white;
    @media (max-width: 768px) {
      overflow: auto;
      height: auto;
    }
  }
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`


const HomePage = () => {
  let userIdentification = sessionStorage.getItem('userId');
  const [user, setUser] = useState(userIdentification);
  const [movieResult, setMovieResult] = useState({})

  const getUser = (userId,email) =>{
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('email', email);
    setUser(userId)
  }
  
  const displayMovie = (movie) => setMovieResult(movie)

  const handleFavorite = (newFavorite) => {
    newFavorite.UserId = parseInt(user)
    Movies.favorite(newFavorite)
  }

  return (
  <>
    <GlobalStyle/>
    <Background/>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
            <SearchHeader setSearchedMovieDisplay={displayMovie}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchDisplay movie={movieResult} favorite={handleFavorite}/>
        </Grid>
        <Grid item xs={12} md={6}>
          {user === null ? <AuthForms setLoggedUser={getUser}/> : <MyFavorites />}
        </Grid>
      </Grid>
    </Container>
  </>
  )
  
};

export default HomePage;
