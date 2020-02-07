const moviesController = require('express').Router();
const fetch = require('node-fetch');

const db = require('../../models');

moviesController.post('/search', (req, res) => {
  const { searchQuery } = req.body;
  fetch(`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=long&apikey=${process.env.OMDB_API_KEY}`)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      if (data.Poster === "N/A") {
        data.Poster = "https://cdn.discordapp.com/attachments/669315705807699978/675391150965784576/9d386079aebd7f0396671e94f3dd649d.png"
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
  console.log(req.body)
  if (req.body.Poster === "N/A") {
    req.body.Poster = "https://cdn.discordapp.com/attachments/669315705807699978/675391150965784576/9d386079aebd7f0396671e94f3dd649d.png"
  }
  db.Movie.findAll({where: {UserId: parseInt(req.body.userId)}})
    .then(movies=>res.json(movies))
    .catch(err=>res.json(err))
})

module.exports = moviesController;