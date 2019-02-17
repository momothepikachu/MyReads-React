import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

import { connect} from 'react-redux';
import { getAll } from './actions/BooksAPI'


class MainPage extends Component {
  // static propTypes = {
  //   books: PropTypes.array.isRequired,
  //   updateBooks: PropTypes.func.isRequired
  // }
  componentWillMount(){
    this.props.getAll();
  }

	render(){
    const {books} = this.props
    const bookShelfTitles = ['Currently Reading', 'Want to Read', 'Read']
    let bookList = []
    if (books) {
      bookList.push(books.filter((book)=>book.shelf==='currentlyReading'))
      bookList.push(books.filter((book)=>book.shelf==='wantToRead'))
      bookList.push(books.filter((book)=>book.shelf==='read'))    
    }
		return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">          
          {books && (
            bookList.map((list, index)=>(
              <div key={bookShelfTitles[index]}>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelfTitles[index]}</h2>
                  <div className="bookshelf-books">
                    <BookShelf
                      shelfInfo={list}
                      books={books}
                    />
                  </div>
                </div>
              </div>
            ))
          )}          
        </div>
        <div className="open-search">
          <Link
            to="/search">
          </Link>
        </div>
      </div>
		)
	}
}

const mapStateToProps = state =>({
  books: state.books,
})

export default connect(mapStateToProps, { getAll })(MainPage)