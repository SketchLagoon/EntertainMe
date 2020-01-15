const moviesController = require('express').Router();
const fetch = require('node-fetch');

const db = require('../../models');

moviesController.post('/search', (req, res) => {
  const { searchQuery } = req.body;
  fetch(`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=long&apikey=${process.env.OMDB_API_KEY}`)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      res.json(data)
    })
    .catch(err=>res.json(err))
});

moviesController.post('/', (req,res)=>{
  const newMovie = req.body.searchQuery
  // console.log(newMovie)
  db.Movie.create(newMovie)
    .then(movie => res.json(movie))
    .catch(err => res.json(err));
})

moviesController.get('/', (req,res)=>{
  db.Movie.find({where: {UserId: req.userId}})
    .then(response=>response.json())
    .then(movies=>res.json(movies))
    .catch(err=>res.json(err))
})

module.exports = moviesController;