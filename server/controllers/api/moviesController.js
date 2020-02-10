const moviesController = require('express').Router();
const fetch = require('node-fetch');
const axios = require ('axios')
const db = require('../../models');

moviesController.post('/search', (req, res) => {
  const { searchQuery } = req.body;
  fetch(`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=long&apikey=${process.env.OMDB_API_KEY}`)
    .then(response => response.json())
    .then(async data => {
      if (data.Poster === "N/A") {
        data.Poster = "./img/no-poster.png"
      }

      const queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${data.Title}%20trailer&key=AIzaSyBW5XaQF7T2AK62lehbP67VRrPLVh9Su7Y`;
      const response = await axios.get(queryURL);
      const vidId = response.data.items[0].id.videoId;
      const embedSRC = `https://www.youtube.com/embed/${vidId}`

      data.embedSRC = embedSRC.toString()
      res.json(data)
    })
    .catch(err=>res.json(err))
});

moviesController.post('/', (req,res)=>{
  const newMovie = req.body.searchQuery
  db.Movie.create(newMovie)
    .then(movie => res.json(movie))
    .catch(err => res.json(err));
})

moviesController.post('/favorites', (req,res)=>{
  console.log(req.body)
  // if (req.body.Poster === "N/A") {
  //   req.body.Poster = "./client/public/img/no-poster.png"
  // }
  db.Movie.findAll({where: {UserId: parseInt(req.body.userId)}})
    .then(movies=>res.json(movies))
    .catch(err=>res.json(err))
})

module.exports = moviesController;