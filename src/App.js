import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import * as BookUtils from './BookUtils'

import './App.css'

import BookCase from './components/BookCase'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount = () => {
    if (this.state.newBook) {
      this.refreshAllBooks();
    }
  }

  refreshAllBooks = () => {
  // gets the books on the bookshelves and updates the state with 
  // a returned, sorted list
    BooksAPI
      .getAll()
      .then((list) => {
        this.setState({
          books: BookUtils.sortAllBooks(list),
          newBook: false
        });
    });
  }

  changeShelf = (book,shelf) => {
    // Makes a call to the API to update the shelf with the selected book
    // to the newly selected shelf
    BooksAPI
      .update(book.shelf)
      .then(response => {
        // Update the state of the book, start with a copy of the list of books
        let newList = this.state.books.slice(0);
        // Looks for the book in the list, in case it's not there yet
        const books = newList.filter(listBook => listBook.id === book.id);
        
        if (books.length) {
          // Update the shelf if book alredy present
          books[0].shelf = shelf;
        } else {
          // Add the selected book to the shelf and sort the list of books
          // using the BookUtils sort function from Doug Brown
          newList.push(book);
          newList = BookUtils.sortAllBooks(newList);
        }
        // Update the state with the newList (selected book included)
        this.setState({books: newList});
      })
  }

  render() {
    return (
    <div className='app'>
      <Route
        exact
        path='/'
        render={(() => (<BookCase 
          books={this.state.books} 
          onChangeShelf={this.changeShelf}
          onRefreshAllBooks={this.refreshAllBooks}/>))}/>

      <Route
        exact
        path='/search'
        render={(() => (<Search selectedBooks={this.state.books} onChangeShelf={this.changeShelf}/>))}/>
    </div>
    )
  }
}

export default BooksApp;
