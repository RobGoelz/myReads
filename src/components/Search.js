import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import * as BookUtils from '../BookUtils'
import Book from './Book';
import '../App.css'

class Search extends Component {
  state ={
    query: '',
    books: [],
    showModal: false
  }

  queryTimer = null;

  changeQuery = (value) => {
    // Updates the query and then waits a quarter second
    // before executing the search, to allow for typing
    clearTimeout(this.queryTimer);
    this.setState({query: value});
    this.queryTimer = setTimeout(this.updateSearch, 250);
  }

  updateSearch = () => {
    // Ensure that we never search with empty string
    if (this.state.query === "") {
      this.setState({error:false, books: []});
    }
    
    // Now, we can execute the search using BooksAPI
    BooksAPI
      .search(this.state.query)
      .then(response => {
        let newList = [];
        let newError = false;
        // Here we check that there wasn't an error in the search,
        // and then check whether there are books in the return, 
        // and finally act as if there were no books matching the 
        // search if all else fails
        if (response === undefined || (response.error && response.error !== "empty query")) {
          newError = true;
        } else if (response.length) {
          // Here we check the list of books the user already has on their shelves 
          // against the search results and apply shelf data as needed
          newList = BookUtils.mergeShelfAndSearch(this.props.selectedBooks, response);
          newList = BookUtils.sortAllBooks(newList);
        }
        // set the state based on the new response
        this.setState({error: newError, books: newList});
      })
  }
  
  componentWillReceiveProps = (props) => {
    // Re-merge and sort the shelf and search lists, then set the state
    this.props = props;
    let newList = BookUtils.mergeShelfAndSearch(this.props.selectedBooks, this.state.books);
    newList = BookUtils.sortAllBooks(newList);
    this.setState({books: newList});
  }

  render() {
    return(
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
             <input 
               type='text' 
               placeholder='Search by title or author'
               onChange={(e) => this.changeQuery(e.target.value)}
               value={this.state.query.value}/>
          </div>
        </div>
        <div className='search-books-results'>
          {this.state.error && (
             <div className='search-error'>
               There was a problem with your search
             </div>
           )}
           {!this.state.error && (
             <span className='search-count'>
              {this.state.books.length}&nbsp; books match your search
             </span>
           )}

          <ol className='books-grid'>
            {this.state.books && this.state.books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onChangeShelf={this.props.onChangeShelf}/>
              </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;