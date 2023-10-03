import {
  GET_CATALOGO_PENDING,
  GET_CATALOGO_REJECTED,
  GET_CATALOGO_SUCCESS,
  GET_ID_CATALOGO_PENDING,
  GET_ID_CATALOGO_REJECTED,
  GET_ID_CATALOGO_SUCCESS,
  DELETE_CATALOGO_SUCCESS,
  DELETE_CATALOGO_REJECTED,
  DELETE_CATALOGO_PENDING,
  CREATE_CATALOGO_PENDING,
  CREATE_CATALOGO_REJECTED,
  CREATE_CATALOGO_SUCCESS,
} from '../actions/types';

const initialState = {
  catalogos: [],
  loading: false,
  error: null,
  catalogoById: null,
};

export const catalogoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATALOGO_PENDING:
    case GET_ID_CATALOGO_PENDING:
    case DELETE_CATALOGO_PENDING:
    case GET_CATALOGO_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case CREATE_CATALOGO_REJECTED:
    case GET_ID_CATALOGO_REJECTED:
    case DELETE_CATALOGO_REJECTED:
    case GET_CATALOGO_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_CATALOGO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        catalogos: action.payload,
      };

    case GET_ID_CATALOGO_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
        catalogoById: state.catalogos.find(
          (catalogo) => catalogo.id === action.payload
        ),
      };
    
    case DELETE_CATALOGO_SUCCESS: 
      return {
        ...state,
        catalogos: state.catalogos.filter(catalogo => catalogo.id !== action.payload)
      }
    
    case CREATE_CATALOGO_SUCCESS:
      return {
        catalogos: [
          ...state.catalogos,
          action.payload
        ]
      };

    default:
      return state;
  }
};
