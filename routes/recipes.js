'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Recipes = require('../models/recipe');


router.get('/', (req, res, next) => {
  Recipes.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});


router.get('/search', (req, res, next) => {

  const searchString = req.query.ingredients || '';
  const ingredients = searchString.split(',');

  const query = Recipes.find();
  ingredients.forEach(ingredient => {
    query.find({ ingredients: { "$in": [ingredient] } });
  })
  query.then((result) => {
    console.log(result)
    res.json(result)
  })
    .catch(next)
});


router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }
  // TODO if (!valid id) 404
  Recipes.findById(id)
    .then((result) => {
      if (!req.session.currentUser) {
        return res.redirect('/auth/login');
      }
      // @todo check other routes for invalids id
      if (!ObjectId.isValid(id)) {
        return next();
      }
    
      // TODO if (!result) 404
      res.json(result);
    })
    .catch(next);
    
});

module.exports = router;
