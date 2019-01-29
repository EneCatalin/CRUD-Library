const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The book text field is required'],
    unique:true
  },
  author:{
      type:String,
      required:[true, 'Please enter an author']
  },
  ISBN:{
      type:String,
      required:[true,'Please enter the ISBN'],
      unique:true
  },
  description:{
      type:String,
      required:[true, 'Please enter a description']
  },
  yearPublished:{
      type:Number,
      required:[false]
  }
})

//create model for todo
const Todo = mongoose.model('book', BookSchema);

module.exports = Todo;