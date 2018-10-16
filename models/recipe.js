'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number
  },
  picture: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String
  }],
  preparation: [{
    type: String,
    required: true
  }]
});

const User = mongoose.model('Recipes', recipesSchema);

module.exports = User;
