import React, { Component } from 'react';
//import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class BookCase extends Component {
  state = {}

  componentDidMount = () => {
  // Update the list of all books - function passed down from to App.js
    this.props.onRefreshAllBooks();
  }

  updateShelves = () => {
  // function to update the state of the individual shelves to contain appropriate books
  // for each shelf
    const newCurrentShelf = {
      name: 'Currently Reading',
      books: this.props.books.filter(book => book.shelf === 'currentlyReading')
    };
    const newWantShelf = {
      name: 'Want to Read',
      books: this.props.books.filter(book => book.shelf === 'wantToRead')
    };
    const newReadShelf = {
      name: 'Read',
      books: this.props.books.filter(book => book.shelf === 'read')
    };
    
    return ([newCurrentShelf, newWantShelf, newReadShelf]);
  }

  render() {
    let shelves = [];
    // test for book content in props
    if (this.props.books && this.props.books.length)
      shelves=this.updateShelves();

    return (
      <div className='app'>
       <div className='list-books'>
         <div className='list-books-title'>
           <h1>MyReads</h1>
         </div>
         <div className='list-books-content'>
           <div>
           {/* check for null shelves and then map to BookShelf */}        
             {shelves && shelves.map((shelf) => (<BookShelf 
               key={shelf.name} 
               shelf={shelf}
               onChangeShelf={this.props.onChangeShelf}
             />))}
           </div>
         </div>
         <div className='open-search'>
           <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
         </div>
       </div>
     </div>
     )
  }
}

export default BookCase