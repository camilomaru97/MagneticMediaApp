import {
  GET_CATALOGO_PENDING,
  GET_CATALOGO_REJECTED,
  GET_CATALOGO_SUCCESS,
} from '../actions/types';

const initialState = {
  catalogos: [],
  loading: false,
  error: null,
};

export const catalogoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOGO_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };

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
        catalogos: action.payload
      };
    default:
      return state;
  }
};
