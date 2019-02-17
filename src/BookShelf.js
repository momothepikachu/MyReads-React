import React, {Component} from 'react'
import BookInfo from './BookInfo'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class BookShelf extends Component {
  // static propTypes = {
  //   shelfInfo: PropTypes.array.isRequired,
  //   updateBooks: PropTypes.func.isRequired
  // }
	render(){
    const {shelfInfo} = this.props
		return(
      <ol className="books-grid">
        {shelfInfo.sort(sortBy('title','publishedDate')).map((book)=>(
          <li key={book.id}>
            <BookInfo 
            book={book}
            />
          </li>
        ))}
      </ol>		
		)
	}
}

export default BookShelf