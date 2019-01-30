const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const connection_url=require('./login_info');
const app = express();

const port =5000;


//connect to the database
mongoose.connect(connection_url, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.send('Welcome to Express');
  });

app.listen(port, ()=> console.log(`Server started on port ${port}`));