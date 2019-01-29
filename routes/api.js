const express = require ('express');
const router = express.Router();
const Book = require('../models/book');


router.get('/books', (req, res, next) => {

    //this will return all the data, exposing only the id and action field to the client
    Book.find({}, 'title')
      .then(data => res.json(data))
      .catch(next)
  });
  

  router.post('/books', (req, res, next) => {
    if(req.body.action){
      Book.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }else {
      res.json({
        error: "The input field is empty"
      })
    }
  });

  /*no idea how this works but we actually need to make
  a couple different ones for isbn and maybe title
  so we don't bother with typing out isbns*/
  
  router.delete('/books/:id', (req, res, next) => {
    Book.findOneAndDelete({"_id": req.params.id})
      .then(data => res.json(data))
      .catch(next)
  })
  

module.exports = router;