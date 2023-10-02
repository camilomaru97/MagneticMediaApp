import { clientAxios } from '../config/axios';

export const getCatalogosApi = async (token) => {
  const headers = { 'x-token': token };
  try {
    const { data } = await clientAxios.get('/catalogo', { headers });
    return data.catalogos ;
  } catch (error) {
    throw new Error(error);
  }
};
