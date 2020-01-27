# Entertainment Search README

![screenshot.png](Entertainment%20Search%20README/Untitled.png)

## What does this app do?

This project is meant to demo my abilities to assemble a MERN stack project. Using the OMDB API users can search up their favorites shows and movies, while logging storing them log back in at a later date to view information regarding the Show or Movie Title / Poster Image / IMDB rating / Movie Maturity Rating / Plot description / Movie Runtime. 

### My primary goals for this project:

- enable users to search OMDB API for their favorite shows and movies
- uniquely store the logged in user's personal favorites
- display the logged in user's personal favorites

### What technologies are used?

- MySQL Database
- Express Server
- React Front End
- Node Backend

## How can I run this app as well?

1. Fork or Clone this repo 
2. Creat a  `.env` file in the server folder and add your OMDB API token to the `OMDB_API_KEY` environment variable in this new file.
3. Launch the client and server in development mode:

     `$ yarn start:dev`