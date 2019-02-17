import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import BookInfo from './BookInfo'

import { connect } from 'react-redux'
import { search } from './actions/BooksAPI'

class SearchPage extends Component {
	updateResults = (query)=>{
		this.props.search(query.trim())
	}
	render(){
		const {results} = this.props	
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
	          			/>
	          		</li>
	          	))}
	          </ol>
	        </div>
	      </div>
		)
	}
}

const mapStateToProps = state =>({
  results: state.results,
})

export default connect(mapStateToProps, { search })(SearchPage)
