'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type:String
  }
});

const User = mongoose.model('Ingredient', ingredientSchema);

module.exports = User;
