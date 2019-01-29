const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

const port =5000;

app.use((req, res, next) => {
    res.send('Welcome to Express');
  });

app.listen(port, ()=> console.log(`Server started on port ${port}`));