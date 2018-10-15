'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path')

const recipesRouter = require('./routes/recipes');
const authRouter = require('./routes/auth');
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('foodable_5bc4441fe4b09cbc25b0c3ee', '/connect/auth/foodable_5bc4441fe4b09cbc25b0c3ee');

rapid.call('NasaAPI', 'getPictureOfTheDay', {});


var app = express();

mongoose.connect('mongodb://localhost/foodable', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));


app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/recipes', recipesRouter);
app.use('/favorites', recipesRouter);
app.use('/auth', authRouter);

//-- errors

app.use((req, res, next) => {
  res.status(404).json({ code: 'not-found' });
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);
  if (!res.headersSent) {
    res.status(500).json({ code: 'unexpected' });
  }
});

module.exports = app;
