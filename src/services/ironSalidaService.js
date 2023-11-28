import { clientAxios } from "../config/axios";

export const getIronSalidaApi = async (token) => {
  const headers = { "x-token": token };
  try {
    const { data } = await clientAxios.get("/ironsalida", { headers });
    return data.ironSalida;
  } catch (error) {
    throw new Error(error);
  }
};

export const postIronSalidaApi = async (token, ironSalida) => {
  const headers = { "x-token": token };
  try {
    const { data } = await clientAxios.post("/ironsalida", ironSalida, {
      headers,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getIronSalidaByIdApi = async (token, id) => {
  const headers = { "x-token": token };
  try {
    const { data } = await clientAxios.get(`/ironsalida/${id}`, { headers });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteIronSalidaApi = async (token, id) => {
  const headers = { "x-token": token };
  try {
    await clientAxios.delete(`/ironsalida/${id}`, { headers });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateIronSalidaApi = async (token, ironSalida, id) => {
  const headers = { "x-token": token };
  try {
    const { data } = await clientAxios.put(`/ironsalida/${id}`, ironSalida, {
      headers,
    });

    return data;
  } catch (error) {
    
    throw error;
  }
};
