import React, { Component } from 'react';

class App extends Component {
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

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.author_name);
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
          <label for="book_title">Book Title</label>
        </div>
        <div className="input-field col s6">
          <input id="author_name" type="text" value={this.state.author_name} onChange={this.handleChange} className="validate" name="author_name"/>
          <label for="author_name">Author Name</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s6">
          <input id="isbn" type="text" value={this.state.isbn} 
          onChange={this.handleChange} className="validate" name="isbn"/>
          <label for="isbn">ISBN</label>
        </div>
        <dov className ="input-field col s6">
          <input id="publication_year" type="number" value={this.state.year_published} 
          onChange={this.handleChange} className="validate" name="year_published"/>
          <label for="publication_year">Year Pulbished</label>
        </dov>
      </div>
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" value={this.state.book_description}
          onChange={this.handleChange} className="materialize-textarea" name="book_description"></textarea>
          <label for="textarea1">Book Description</label>
        </div>
      </div>
    </form>
  </div>
  <button className="btn waves-effect waves-light col s12" type="submit" value="submit" name="action">Submit
  </button>
  </form>
  </div> 
</div>
    );
  }
}

export default App;




