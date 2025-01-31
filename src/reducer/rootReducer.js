// handle my different todo actions
// root reducer to combine the reducer and pass it on to store

import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({todos: todoReducer});
export default rootReducer;