import {
  GET_SALIDA_SUCCESS,
  GET_SALIDA_REJECTED,
  GET_SALIDA_PENDING,
  GET_ID_SALIDA_SUCCESS,
  GET_ID_SALIDA_REJECTED,
  GET_ID_SALIDA_PENDING,
  DELETE_SALIDA_SUCCESS,
  DELETE_SALIDA_REJECTED,
  DELETE_SALIDA_PENDING,
  UPDATE_SALIDA_SUCCESS,
  UPDATE_SALIDA_REJECTED,
  UPDATE_SALIDA_PENDING,
  UPDATE_GET_SALIDA,
  CREATE_SALIDA_SUCCESS,
  CREATE_SALIDA_REJECTED,
  CREATE_SALIDA_PENDING,
} from "../actions/types";

const initialState = {
  ironSalida: [],
  loading: false,
  error: null,
  ironSalidaById: null,
  ironSalidaToUpdate: null,
};

export const ironSalidaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SALIDA_PENDING:
    case GET_ID_SALIDA_PENDING:
    case DELETE_SALIDA_PENDING:
    case UPDATE_SALIDA_PENDING:
    case CREATE_SALIDA_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_SALIDA_REJECTED:
    case GET_ID_SALIDA_REJECTED:
    case DELETE_SALIDA_REJECTED:
    case UPDATE_SALIDA_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_SALIDA_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_SALIDA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ironSalida: action.payload,
      };

    case GET_ID_SALIDA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ironSalidaById: action.payload,
      };

    case DELETE_SALIDA_SUCCESS:
      return {
        ...state,
        ironSalida: state.ironSalida.filter(
          (item) => item.id !== action.payload
        ),
        loading: false,
      };

    case CREATE_SALIDA_SUCCESS:
      return {
        ...state,
        ironSalida: [...state.ironSalida, action.payload],
        loading: false,
      };

    case UPDATE_GET_SALIDA:
      return {
        ...state,
        ironSalidaToUpdate: state.ironSalida.find(
          (item) => item.id === action.payload
        ),
      };

    case UPDATE_SALIDA_SUCCESS:
      return {
        ...state,
        ironSalida: state.ironSalida.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
      };

    default:
      return state;
  }
};
