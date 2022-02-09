import { applyMiddleware, combineReducers, createStore } from "redux";
import RecipeReducer from "./RecipeReducer"
import thunk from "redux-thunk"

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')) : {}

let reducers = combineReducers(
    {
        RecipeReducer
    });

let store = createStore(reducers, persistedState, applyMiddleware(thunk));

export default store;