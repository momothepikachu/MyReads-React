import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import BookInfo from './BookInfo'

class SearchPage extends Component {
	state = {
		results: []
	}
	updateResults = (query)=>{
		BooksAPI.search(query.trim()).then((res)=>{
			if (res && res.length) {
				this.setState({
					results: res
				})				
			} else{
				this.setState({
					results: []
				})				
			}
		})		
	}
	render(){
		const {updateBooks, books} = this.props
		const {results} = this.state	
		console.log(results)	
		return (
	      <div className="search-books">
	        <div className="search-books-bar">
	          <Link
	          	to="/"
	          	className="close-search"></Link>
	          <div className="search-books-input-wrapper">
	            <input type="text" onChange={(e)=>this.updateResults(e.target.value)} placeholder="Search by title or author"/>
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">
	          	{results.sort(sortBy('title')).map((book)=>(
	          		<li key={book.id}>
	          			<BookInfo
	          				book={book}
	          				updateBooks={updateBooks}
	          				books={books}
	          			/>
	          		</li>
	          	))}
	          </ol>
	        </div>
	      </div>
		)
	}
}

export default SearchPage