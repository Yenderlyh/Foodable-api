'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number,
    // required: true
  },
  picture: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    // required: true
  },
  preparation: {
    type: Array,
    required: true
  }
});

const User = mongoose.model('Recipes', recipesSchema);

module.exports = User;
