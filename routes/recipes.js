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

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }
  Recipes.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});


module.exports = router;
