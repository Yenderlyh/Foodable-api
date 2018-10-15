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


router.get('/search', (req, res, next) => {

  const searchString = req.query.ingredient;
  // const {ingredients} = req.query;
  // let matchQuery = {};
  // if(ingredients){
  //   matchQuery.ingredients = ingredients.toLowerCase();
  // }

  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  // Recipes.find(searchString)
  //   .then((results)=>{
  //     let result = [];
  //     results.forEach((recipe)=>{
  //       if(recipe.ingredients) {
  //         result = recipe.ingredients.filter((ingredient)=>{
  //           return ingredient.equals(searchString);
  //         })
  //         return result
  //      }
  //     })
  //     res.json(result);
  //   })
  //   .catch(next);

  Recipes.find({ingredients: searchString})
    .then((result)=>{
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
  Recipes.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});



module.exports = router;
