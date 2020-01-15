"use strict";

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      Title: DataTypes.STRING,
      Year: DataTypes.STRING,
      Rated: DataTypes.STRING,
      Runtime: DataTypes.STRING,
      Plot: DataTypes.STRING,
      Poster: DataTypes.STRING,
      imdbRating: DataTypes.STRING
    },
    {}
  );

  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.User);
  };

  return Movie;
};
