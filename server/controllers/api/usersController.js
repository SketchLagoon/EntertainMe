const usersController = require('express').Router();

const db = require('../../models');

usersController.post('/', (req, res) => {
  const { email, password } = req.body;
  db.User.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.get('/me', (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.User.findOne({ where: { email } })
    .then(user => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }
      res.json({user});
    });
});

module.exports = usersController;