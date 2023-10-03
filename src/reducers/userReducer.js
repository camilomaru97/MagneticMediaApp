import {
  POST_USER_PENDING,
  POST_USER_REJECTED,
  POST_USER_SUCCESS,
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_REJECTED,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
  token: null,
  id: null,
  status: 'not-authenticated',
  loading: false,
  error: null,
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
    case POST_USER_SUCCESS:
      return {
        ...state,
        status: 'authenticated',
        loading: false,
        token: action.payload.token,
        user: action.payload.name,
        id: action.payload.uid
      };

    case CREATE_USER_REJECTED:
    case POST_USER_REJECTED:
      return {
        ...state,
        status: 'not-authenticated',
        loading: false,
        error: action.payload,
      };
    case CREATE_USER_PENDING:
    case POST_USER_PENDING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case LOGOUT_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGOUT_SUCCESS:
      return initialState
         
    default:
      return state;
  }
};
