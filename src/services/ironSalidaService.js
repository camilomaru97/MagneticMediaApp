import { clientAxios } from "../config/axios";


export const getIronSalidaApi = async (token) => {
    const headers = { 'x-token': token };
    try {
      const { data } = await clientAxios.get('/ironsalida', { headers })
      return data.ironSalida;
    } catch (error) {
      throw new Error(error);
    }
  };