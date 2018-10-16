'use strict';

const express = require('express');
const router = express.Router();

const Recipes = require('../models/recipe');

router.get('/', (req, res, next) => {
  
  Recipes.find({})
    .then((results) => {
      res.json(results);
    })
    .catch(next);
});
router.post('/:id/fav', (req, res, next) => {
  const id = req.params.id;
  const userId = req.session.currentUser._id;
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  User.findByIdAndUpdate(id, { $push: { favorites: any } }, { new: true })
    .then((result) => {
      res.redirect(`/`);
    })
    .catch(next);
});

router.post('/:id/removefav', (req, res, next) => {
  const id = req.params.id;
  const userId = req.session.currentUser._id;
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  User.findByIdAndUpdate(id, { $pull: { favorites: any } }, { new: true })
    .then((result) => {
      res.redirect(`/`);
    })
    .catch(next);
});


module.exports = router;
