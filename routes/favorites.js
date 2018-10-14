'use strict';

const express = require('express');
const router = express.Router();

const Recipes = require('../models/recipes');

router.get('/', (req, res, next) => {
  
  Recipes.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});

module.exports = router;
