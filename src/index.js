const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').load();

const app = express();

// Necessário para utilizar socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(`mongodb://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@ds121455.mlab.com:21455/${process.env.BD_MONGO}`, {
  useNewUrlParser: true,
});

// midware para utilização de socket.io
app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('server started on port 3000');
});
