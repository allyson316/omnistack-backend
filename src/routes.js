const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/tweetController');
const LikeController = require('./controllers/likeController')

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id', LikeController.store);


module.exports = routes;
