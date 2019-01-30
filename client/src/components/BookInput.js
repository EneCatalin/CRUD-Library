import React, { Component } from 'react';
import axios from 'axios';

class BookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_title:'',
      isbn:'',
      year_published:'',
      book_description:'',
      author_name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //should probably use this to send the
  //create event to the database
  handleSubmit(event) {
    //
    console.log(this.state.year_published);
    event.preventDefault();
  }

  render() {
    return (
<div className="App">
  <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input id="book_title" type="text" value={this.state.book_title} onChange={this.handleChange} name="book_title" className="validate"/>
          <label htmlFor="book_title">Book Title</label>
        </div>
        <div className="input-field col s6">
          <input id="author_name" type="text" value={this.state.author_name} onChange={this.handleChange} className="validate" name="author_name"/>
          <label htmlFor="author_name">Author Name</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s6">
          <input id="isbn" type="text" value={this.state.isbn} 
          onChange={this.handleChange} className="validate" name="isbn"/>
          <label htmlFor="isbn">ISBN</label>
        </div>
        <div className ="input-field col s6">
          <input id="publication_year" type="number" value={this.state.year_published} 
          onChange={this.handleChange} className="validate" name="year_published"/>
          <label htmlFor="publication_year">Year Pulbished</label>
        </div>
      </div>
      <div className="row">
    <div className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" value={this.state.book_description}
          onChange={this.handleChange} className="materialize-textarea" name="book_description"></textarea>
          <label htmlFor="textarea1">Book Description</label>
        </div>
      </div>
    </div>
  </div>
  <button className="btn waves-effect waves-light col s12" type="submit" value="submit" name="action">Add Book
  </button>
  </form>
  </div> 
</div>
    );
  }
}

export default BookInput;




