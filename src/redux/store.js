import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers({userReducer, cartReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))