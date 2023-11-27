import { clientAxios } from '../config/axios';
import {
  POST_USER_PENDING,
  POST_USER_REJECTED,
  POST_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_REJECTED,
  CREATE_USER_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_REJECTED,
  LOGOUT_PENDING,
} from './types';

//Auth
export const postUser = (payload) => {
  return async (dispatch) => {
    dispatch(postUserPending(true));
    try {
      const res = await clientAxios.post('/auth', payload);
      dispatch(postUserSuccess(res.data));
    } catch ({ response }) {
      dispatch(postUserError(response.data.msg));
    }
  };
};

export const postUserPending = (payload) => ({
  type: POST_USER_PENDING,
  payload,
});
export const postUserSuccess = (payload) => ({
  type: POST_USER_SUCCESS,
  payload,
});
export const postUserError = (payload) => ({
  type: POST_USER_REJECTED,
  payload,
});

//Create New User
export const postNewUser = (payload) => {
  return async (dispatch) => {
    dispatch(postNewUserPending(true));
    try {
      const res = await clientAxios.post('auth/new', payload);
      dispatch(postNewUserSuccess(res.data));
    } catch ({ response }) {
      dispatch(postNewUserError(response.data.msg));
    }
  };
};

export const postNewUserPending = (payload) => ({
  type: CREATE_USER_PENDING,
  payload,
});
export const postNewUserSuccess = (payload) => ({
  type: CREATE_USER_SUCCESS,
  payload,
});
export const postNewUserError = (payload) => ({
  type: CREATE_USER_REJECTED,
  payload,
});

//Logout User
export const logOutUser = () => {
    return (dispatch) => {
        dispatch(logoutUserPending())
        dispatch(logoutUserSuccess())
    }
}

export const logoutUserPending = () => ({ type: LOGOUT_PENDING })
export const logoutUserSuccess = () => ({ type: LOGOUT_SUCCESS })
