import types from './types'

const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const get = (bookId) => dispatch => {
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => dispatch({
      type: types.GET_BOOKS,
      payload: data.book
    }))
}

export const getAll = () => dispatch => {
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => dispatch({
      type: types.GETALL_BOOKS,
      payload: data.books
    }))
}


export const update = (book, shelf) => dispatch => {
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: types.UPDATE_BOOK,
      payload: data
    }))
}


export const search = (query) => dispatch => {
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: types.SEARCH_BOOKS,
      payload: data.books
    }))
}

