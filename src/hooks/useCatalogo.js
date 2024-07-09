import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCatalogo,
  getCatalogoById,
  getCatalogos,
  postCatalogo,
  putCatalogo,
} from '../actions/catalogoActions';
import { useEffect, useState } from 'react';

export const useCatalogo = (filterSearch ) => {
  const token = useSelector((state) => state?.user?.token);
  const catalogos = useSelector((state) => state?.catalogo?.catalogos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalogos(token));
  }, []);
  
  const sliceCatalogo = catalogos?.slice(0, 7);
  const filteredCatalogoByDate =  [...sliceCatalogo].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );


  const filters =
    typeof filterSearch === 'string' && filterSearch.length > 0
      ? [...sliceCatalogo].filter((catalogo) => {
          return (
            catalogo.usuario.name
              .toLowerCase()
              .includes(filterSearch.toLowerCase()) ||
            catalogo.ciclo.toLowerCase().includes(filterSearch.toLowerCase()) ||
            catalogo.tecnologia
              .toLowerCase()
              .includes(filterSearch.toLowerCase())
          );
        })
      : filteredCatalogoByDate;

  const onGetCatalogoById = (id) => {
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
    filters,
    filteredCatalogoByDate,
    onGetCatalogoById,
    onPostCatalogo,
    onPutCatalogo,
    onDeleteCatalogo,
  };
};
