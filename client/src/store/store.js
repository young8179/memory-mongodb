import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import {reducers} from '../reducer/posts'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = ()=>{
    return createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
    
}

export default configureStore