import { combineReducers } from 'redux';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../action/posts';



const postReducer = (state = [], action)=>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        case LIKE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return state;
                
    
    }
}



export const reducers = combineReducers({
    posts: postReducer
})


