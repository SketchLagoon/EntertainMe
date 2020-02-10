import React, { useState, useEffect } from "react";
// import { Container, Grid } from '@material-ui/core';

// import AuthForms from "../../components/AuthForms/AuthForms";

// import Background from "../../components/UI/Background/Background"
// import SearchHeader from "../../components/UI/SearchHeader/SearchHeader"
// import SearchDisplay from "../../components/UI/SearchDisplay/SearchDisplay"
// import MyFavorites from "../../components/UI/MyFavorites/MyFavorites"

import NavBar from "../../components/UI/NavBar/NavBar";
import SearchResultHeader from "../../components/UI/SearchResultHeader/SearchResultHeader";
import SearchResultSummary from "../../components/UI/SearchResultSummary/SearchResultSummary";
import Favorites from "../../components/UI/Favorites/Favorites";
import LandingPage from "../../components/UI/LandingPage/LandingPage";

import SearchHeader from "../../components/UI/SearchHeader/SearchHeader";

import { Movies } from "../../lib/API";

import styled, { keyframes, createGlobalStyle } from "styled-components";

const HomePage = () => {
  let userIdentification = sessionStorage.getItem("userId");
  const [user, setUser] = useState(userIdentification);
  const [favorites, setFavorites] = useState([]);
  const [movieResult, setMovieResult] = useState({});
  const [HDPoster, setHDPoster] = useState("");

  const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  `;

  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif !important;
    background-color: #2F3437;
    margin: 0;
    padding: 0;
    // overflow: hidden;
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
`;

  const Dashboard = styled.div`
    animation-name: ${FadeIn};
    animation-duration: 3s;
    -webkit-animation-name: ${FadeIn};
    -webkit-animation-duration: 3s;
  `;

  const DesktopWidth = styled.div`
    @media (min-width: 600px) {
      width: 100vw;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
  `;

  useEffect(() => {
    user
      ? Movies.getMy(sessionStorage.getItem("userId"))
          .then(myFavoriteMovies => {
            setFavorites(myFavoriteMovies.data);
            setMovieResult(
              myFavoriteMovies.data[myFavoriteMovies.data.length - 1]
            );
            setHDPoster(
              myFavoriteMovies.data[
                myFavoriteMovies.data.length - 1
              ].Poster.replace("X300", "")
            );
          })
          .catch(err => console.log(err))
      : console.log("no user logged in");

  }, [user]);

  const getUser = (userId, email) => {
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("email", email);
    setUser(userId);
  };

  const handleFavorite = newFavorite => {
    //To do
    //conditional logic to determine duplicate / unfavorite if new fav is duplicate
    newFavorite.UserId = parseInt(user);
    console.log(newFavorite)
    Movies.favorite(newFavorite);
    window.location.reload();
  };

  return (
    <>
      <GlobalStyle />
      {user ? (
        <Dashboard>
          <NavBar
            setLoggedUser={getUser}
            user={sessionStorage.getItem("email")}
            setMovieResult={setMovieResult}
            setHDPoster={setHDPoster}
          />
          {movieResult ? (
            <>
              <DesktopWidth>
                <SearchResultHeader
                  poster={HDPoster}
                  movieResult={movieResult}
                  handleFavorite={handleFavorite}
                />
                <SearchResultSummary featuredMovie={movieResult} />
              </DesktopWidth>
              {favorites.length ? (
                <Favorites
                  favs={favorites}
                  setMovieResult={setMovieResult}
                  setHDPoster={setHDPoster}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <SearchHeader setMovieResult={setMovieResult} setHDPoster={setHDPoster}></SearchHeader>
            </>
          )}
        </Dashboard>
      ) : (
        <>
          <LandingPage setLoggedUser={getUser} />
        </>
      )}
    </>
  );
};

export default HomePage;
