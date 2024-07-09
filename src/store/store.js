import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducer } from "../reducers";

export const store = createStore(
    combineReducer,
    compose(applyMiddleware(thunk),
     // Espacio para redux developer tools
     window.__REDUX_DEVTOOLS_EXTENSION__ && 
     window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);