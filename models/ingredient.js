'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    enum:['vegetables', 'meat','oil','condiments','legumes','dairy','fruits','grains']
  }
});

const User = mongoose.model('Ingredient', ingredientSchema);

module.exports = User;
