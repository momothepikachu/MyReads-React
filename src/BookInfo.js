import React, {Component} from 'react'

import { connect } from 'react-redux'
import { update, getAll } from './actions/BooksAPI'

class BookInfo extends Component {
	changeShelf = (e)=>{
		e.preventDefault()
    const value = e.target.value
    this.props.update(this.props.book, value)
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.update){
      this.props.getAll()
    }
  }

	render(){
		const {book, books} = this.props
		const match = books.find((item)=>item.id===book.id)
		if(match){
			 book.shelf=match.shelf
		}
		return(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundSize: 'contain', backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://s26.postimg.cc/ccvlth5sp/book-default-cover.jpg'})` }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf ? book.shelf : 'none'} onChange={this.changeShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
		)
	}
}

const mapStateToProps = state =>({
  books: state.books,
  update: state.update,
})

export default connect(mapStateToProps, { update, getAll })(BookInfo)
