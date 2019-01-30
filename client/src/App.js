import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="book_title" type="text" className="validate"/>
          <label for="book_title">Book Title</label>
        </div>
        <div className="input-field col s6">
          <input id="author_name" type="text" className="validate"/>
          <label for="author_name">Author Name</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s6">
          <input id="isbn" type="text" className="validate"/>
          <label for="isbn">ISBN</label>
        </div>
        <dov className ="input-field col s6">
          <input id="publication_year" type="number" className="validate"/>
          <label for="publication_year">Year Pulbished</label>
        </dov>
      </div>
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
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




