import {combineReducers} from 'redux';
import types from '../actions/types'

const books = (state = [], action) => 
    action.type===types.GETALL_BOOKS? 
        action.payload :
        state


const results = (state = [], action) => 
    action.type===types.SEARCH_BOOKS?
        ((action.payload && action.payload.length)? action.payload: []):
        state

const update = (state={}, action) => 
    action.type===types.UPDATE_BOOK?
        action.payload :
        state

export default combineReducers({
    books,
    results,
    update,
})
