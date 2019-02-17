import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

import {Provider} from 'react-redux'
import store from './store'

class BooksApp extends React.Component {
  // state = {
  //   books: []
  // }
  // componentDidMount(){
  //   BooksAPI.getAll().then((books)=>{
  //     this.setState({books})
  //   })
  // }
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Route path="/search" render={()=>(
            <SearchPage/>
            )} />
          <Route exact path="/" render={()=>(
            <MainPage/>
          )} />
        </div>      
      </Provider>
    )
  }
}

export default BooksApp
