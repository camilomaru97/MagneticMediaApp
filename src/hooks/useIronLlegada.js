import { useDispatch, useSelector } from 'react-redux';
import {
  deleteIronLlegada,
  getIronLlegadaById,
  getIronLlegada,
  postIronLlegada,
  putIronLlegada,
} from '../actions/ironLlegadaActions';
import { useEffect, useState } from 'react';

export const useIronLlegada = (filterSearch ) => {
  const token = useSelector((state) => state?.user?.token);
  const ironLlegadas = useSelector((state) => state?.ironLlegada?.ironLlegadas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIronLlegada(token));
  }, []);

  // const filteredIronLlegadaByDate =  [...ironLlegadas].sort(
  //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  // );

  // const filters =
  //   typeof filterSearch === 'string' && filterSearch.length > 0
  //     ? [...ironLlegadas].filter((ironLlegada) => {
  //         return (
  //           ironLlegada.usuario.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
  //             ironLlegada.tipo_transporte.toLowerCase().includes(filterSearch.toLowerCase()) ||
  //             ironLlegada.numero_remision.toLowerCase().includes(filterSearch.toLowerCase()) ||
  //             ironLlegada.codigo_medio.toLowerCase().includes(filterSearch.toLowerCase())
  //         );
  //       })
  //     : filteredIronLlegadaByDate;
  
      const filters =
      typeof filterSearch === 'string' && filterSearch.length > 0
        ? [...ironLlegadas].filter((ironLlegada) => {
            return (
              ironLlegada.usuario.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
                ironLlegada.tipo_transporte.toLowerCase().includes(filterSearch.toLowerCase()) ||
                ironLlegada.numero_remision.toLowerCase().includes(filterSearch.toLowerCase()) ||
                ironLlegada.codigo_medio.toLowerCase().includes(filterSearch.toLowerCase())
            );
          })
        : ironLlegadas;    

  const onGetIronLlegadaById = (id) => {
    dispatch(getIronLlegadaById(token, id));
  };
  const onPostIronLlegada = (ironLlegada) => {
    dispatch(postIronLlegada(token, ironLlegada));
  };
  const onPutIronLlegada = (ironLlegada, id) => {
    dispatch(putIronLlegada(token, ironLlegada, id));
  };
  const onDeleteIronLlegada = (id) => {
    dispatch(deleteIronLlegada(token, id));
  };

  return {
    ironLlegadas,
    filters,
    // filteredIronLlegadaByDate,
    onGetIronLlegadaById,
    onPostIronLlegada,
    onPutIronLlegada,
    onDeleteIronLlegada,
  };
};