'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../data/ingredients');

const Ingredient = require('../models/ingredient.js');

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
  .then(() => {
    console.log('Connected to Mongo!');
    return Ingredient.remove({});
  })
  .then(() => {
    console.log('Empty db');
    return Ingredient.insertMany(data);
  })
  .then((results) => {
    console.log('You have some ingredients', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
