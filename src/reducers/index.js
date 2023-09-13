import { combineReducers } from "redux";
import { catalogoReducer } from "./catalogoReducer";
import { userReducer } from "./userReducer";

export const combineReducer = combineReducers({
    user: userReducer,
    catalogo: catalogoReducer
})