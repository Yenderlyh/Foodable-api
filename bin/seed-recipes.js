'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../data/recipes');

const Recipe = require('../models/recipe.js');

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
  .then(() => {
    console.log('Connected to Mongo!');
    return Recipe.remove({});
  })
  .then(() => {
    console.log('Empty db');
    return Recipe.insertMany(data);
  })
  .then((results) => {
    console.log('You have some recipes', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
