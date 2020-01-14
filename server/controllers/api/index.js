const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/movies', require('./moviesController'));


module.exports = apiControllers;