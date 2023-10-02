import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCatalogo,
  getCatalogoById,
  getCatalogos,
  postCatalogo,
  putCatalogo,
} from '../actions/catalogoActions';
import { useEffect } from 'react';

export const useCatalogo = () => {
  const token = useSelector((state) => state?.user?.token);
  const catalogos = useSelector((state) => state?.catalogo?.catalogos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogos(token));
  }, []);

  const onGetCatalogoById = (id) => {
    console.log(id)
    dispatch(getCatalogoById(token, id));
  };
  const onPostCatalogo = (catalogo) => {
    dispatch(postCatalogo(token, catalogo));
  };
  const onPutCatalogo = (catalogo, id) => {
    dispatch(putCatalogo(token, catalogo, id));
  };
  const onDeleteCatalogo = (id) => {
    dispatch(deleteCatalogo(token, id));
  };

  return {
    catalogos,
    onGetCatalogoById,
    onPostCatalogo,
    onPutCatalogo,
    onDeleteCatalogo,
  };
};
