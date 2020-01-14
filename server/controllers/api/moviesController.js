const moviesController = require('express').Router();
const fetch = require('node-fetch');

const db = require('../../models');

moviesController.post('/', (req, res) => {
  const { searchQuery } = req.body;
  fetch(`https://www.omdbapi.com/?t=${searchQuery}&y=&plot=long&apikey=${process.env.OMDB_API_KEY}`)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      res.json(data)
    })
    .catch(err=>res.json(err))
});

module.exports = moviesController;