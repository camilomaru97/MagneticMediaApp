import { combineReducers } from "redux";
import { catalogoReducer } from "./catalogoReducer";
import { userReducer } from "./userReducer";
import { ironLlegadaReducer } from "./ironLlegadaReducer";

export const combineReducer = combineReducers({
    user: userReducer,
    catalogo: catalogoReducer,
    ironLlegada: ironLlegadaReducer
})