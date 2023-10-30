import { useDispatch } from 'react-redux';
import { clientAxios } from '../config/axios';
import { deleteIronLlegadaError } from '../actions/ironLlegadaActions';

export const getIronLlegadaApi = async (token) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.get('/ironllegada', { headers });
    return data.ironllegada;
  } catch (error) {
    throw new Error(error);
  }
};

export const postIronLlegadaApi = async (token, ironLlegada) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.post('/ironllegada', ironLlegada, { headers });
    return data
  } catch (error) {
    throw new Error(error);
  }
};

export const getIronLlegadaByIdApi = async (token, id) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.get(`/ironllegada/${id}`, { headers });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteIronLlegadaApi = async (token, id, dispatch) => {
  const headers = { 'x-token': token };
  try {
    await clientAxios.delete(`/ironllegada/${id}`, { headers });
  } catch (error) {
    dispatch(deleteIronLlegadaError(error.response.data.msg))
    throw new Error(error);
  }
};

export const updateIronLlegadaApi = async (token, ironLlegada, id) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.put(`/ironllegada/${id}`, ironLlegada, { headers });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
