import { combineReducers } from "redux";
import { catalogoReducer } from "./catalogoReducer";
import { userReducer } from "./userReducer";
import { ironLlegadaReducer } from "./ironLlegadaReducer";
import { ironSalidaReducer } from "./ironSalidaReducer";

export const combineReducer = combineReducers({
    user: userReducer,
    catalogo: catalogoReducer,
    ironLlegada: ironLlegadaReducer,
    ironSalida: ironSalidaReducer
})