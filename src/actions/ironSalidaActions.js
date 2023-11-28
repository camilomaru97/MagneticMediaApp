// ironSalidaActions.js
import {
  GET_SALIDA_PENDING,
  GET_SALIDA_REJECTED,
  GET_SALIDA_SUCCESS,
  CREATE_SALIDA_PENDING,
  CREATE_SALIDA_REJECTED,
  CREATE_SALIDA_SUCCESS,
  DELETE_SALIDA_PENDING,
  DELETE_SALIDA_REJECTED,
  DELETE_SALIDA_SUCCESS,
  UPDATE_SALIDA_PENDING,
  UPDATE_SALIDA_REJECTED,
  UPDATE_SALIDA_SUCCESS,
} from "./types";

import {
  getIronSalidaApi,
  postIronSalidaApi,
  getIronSalidaByIdApi,
  deleteIronSalidaApi,
  updateIronSalidaApi,
} from "../services/ironSalidaService";

// Get all Iron Salida
export const getIronSalida = (token) => {
  return async (dispatch) => {
    dispatch(getIronSalidaPending());
    try {
      const data = await getIronSalidaApi(token);
      dispatch(getIronSalidaSuccess(data));
    } catch (error) {
      dispatch(getIronSalidaError(error));
    }
  };
};
export const getIronSalidaPending = () => ({ type: GET_SALIDA_PENDING });
export const getIronSalidaError = (payload) => ({
  type: GET_SALIDA_REJECTED,
  payload,
});
export const getIronSalidaSuccess = (payload) => ({
  type: GET_SALIDA_SUCCESS,
  payload,
});

// Get Iron Salida by ID
export const getIronSalidaById = (token, id) => {
  return async (dispatch) => {
    dispatch(getIronSalidaByIdPending());
    try {
      const data = await getIronSalidaByIdApi(token, id);
      dispatch(getIronSalidaByIdSuccess(data));
    } catch (error) {
      dispatch(getIronSalidaByIdError(error));
    }
  };
};
export const getIronSalidaByIdPending = () => ({ type: GET_SALIDA_PENDING });
export const getIronSalidaByIdError = (payload) => ({
  type: GET_SALIDA_REJECTED,
  payload,
});
export const getIronSalidaByIdSuccess = (payload) => ({
  type: GET_SALIDA_SUCCESS,
  payload,
});

// Create Iron Salida
export const postIronSalida = (token, ironSalida) => {
  return async (dispatch) => {
    dispatch(postIronSalidaPending());
    try {
      const data = await postIronSalidaApi(token, ironSalida);
      dispatch(postIronSalidaSuccess(data));
    } catch (error) {
      dispatch(postIronSalidaError(error));
    }
  };
};
export const postIronSalidaPending = () => ({ type: CREATE_SALIDA_PENDING });
export const postIronSalidaError = (payload) => ({
  type: CREATE_SALIDA_REJECTED,
  payload,
});
export const postIronSalidaSuccess = (payload) => ({
  type: CREATE_SALIDA_SUCCESS,
  payload,
});

// Update Iron Salida
export const updateIronSalida = (token, ironSalida, id) => {
  return async (dispatch) => {
    dispatch(updateIronSalidaPending());
    try {
      const data = await updateIronSalidaApi(token, ironSalida, id);
      dispatch(updateIronSalidaSuccess(data));
    } catch (error) {
      dispatch(updateIronSalidaError(error));
    }
  };
};
export const updateIronSalidaPending = () => ({ type: UPDATE_SALIDA_PENDING });
export const updateIronSalidaError = (payload) => ({
  type: UPDATE_SALIDA_REJECTED,
  payload,
});
export const updateIronSalidaSuccess = (payload) => ({
  type: UPDATE_SALIDA_SUCCESS,
  payload,
});

// Delete Iron Salida
export const deleteIronSalida = (token, id) => {
  return async (dispatch) => {
    dispatch(deleteIronSalidaPending());
    try {
      await deleteIronSalidaApi(token, id);
      dispatch(deleteIronSalidaSuccess(id));
    } catch (error) {
      dispatch(deleteIronSalidaError(error));
    }
  };
};
export const deleteIronSalidaPending = () => ({ type: DELETE_SALIDA_PENDING });
export const deleteIronSalidaError = (payload) => ({
  type: DELETE_SALIDA_REJECTED,
  payload,
});
export const deleteIronSalidaSuccess = (payload) => ({
  type: DELETE_SALIDA_SUCCESS,
  payload,
});
