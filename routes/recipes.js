'use strict';
///:id does not validate id is valid AND does not check if dnb returned a recipe (in both cases should respond with 404)

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
    query.and({ ingredients: { "$in": [ingredient] } });
  })
  query.then((result) => {
    if (!result) {
      return next();}
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
  if (!ObjectId.isValid(id)) {
    return next();
  }
  Recipes.findById(id)
    .then((result) => {
      if (!result) {
        return next();
      }
    res.json(result);
    })
    .catch(next);
    
});

module.exports = router;
