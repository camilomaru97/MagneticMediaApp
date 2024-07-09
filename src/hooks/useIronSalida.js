import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getIronSalida } from '../actions/ironSalidaActions';

export const useIronSalida = ( ) => {
  const token = useSelector((state) => state?.user?.token);
  const ironSalida = useSelector((state) => state?.ironSalida?.ironSalida);
  console.log(ironSalida)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIronSalida(token));
  }, []);

};
