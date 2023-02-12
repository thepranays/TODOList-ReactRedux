import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TodoReducer } from "./reducer/TodoReducers";
const reducer = combineReducers({
    //this contains all reducers
    Todo: TodoReducer,

});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))

);

export default store;