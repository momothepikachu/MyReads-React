import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({
        books: books
      })
    })
  }
  updateBooks(){
    BooksAPI.getAll().then((books)=>{
      this.setState({
        books: books
      })
    })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=>(
          <SearchPage
            updateBooks={this.updateBooks.bind(this)}
            books={this.state.books}
          />
          )} />
        <Route exact path="/" render={()=>(
          <MainPage
            books={this.state.books}
            updateBooks={this.updateBooks.bind(this)}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp
