const moviesController = require('express').Router();
const fetch = require('node-fetch');
const axios = require ('axios')
const db = require('../../models');

moviesController.post('/search', (req, res) => {
  const { searchQuery } = req.body;
  fetch(`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=long&apikey=${process.env.OMDB_API_KEY}`)
    .then(response => response.json())
    .then(async data => {
      const queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${data.Title}%20trailer&key=${process.env.YT_API_KEY}`;
      const response = await axios.get(queryURL);
      const vidId = response.data.items[0].id.videoId;
      const embedSRC = `https://www.youtube.com/embed/${vidId}`
      data.embedSRC = embedSRC.toString()
      if (data.Poster === "N/A") {
        data.Poster = "./img/no-poster.png"
        data.embedSRC = ""
      }
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
  db.Movie.findAll({where: {UserId: parseInt(req.body.userId)}})
    .then(movies=>res.json(movies))
    .catch(err=>res.json(err))
})

module.exports = moviesController;