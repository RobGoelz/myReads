import React, { Component } from 'react';
//import * as BooksAPI from './BooksAPI'
import Changer from './Changer';

class Book extends Component {
  state = {
    shelfSelectio: this.props.book.shelf || 'none'
  }

  render () {
    // Joins an array of authors into a single string
    const authors = this.props.book.authors && this.props.book.authors.join(' & ');

    // create thumbnail url from book props
    let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

    return (
        <div className='book'>
          <div className='book-top'>
              <button className='book-cover-button'>
                <div
                  className='book-cover'
                  style={{ 
                  width: 128,
                  height: 193,
                  backgroundImage: url
                }}></div>
              </button>
              <Changer book={this.props.book} onChangeShelf={this.props.onChangeShelf}/>
          </div>
          <div className='book-title'>{this.props.book.title}</div>
          <div className='book-authors'>{authors}</div>
        </div>
    ) 
  }
}

export default Book;