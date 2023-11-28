import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getIronSalida,
  postIronSalida,
  deleteIronSalida,
} from "../actions/ironSalidaActions";

export const useIronSalida = () => {
  const token = useSelector((state) => state?.user?.token);
  const ironSalida = useSelector((state) => state?.ironSalida?.ironSalida);
  console.log(ironSalida);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIronSalida(token));
  }, []);

  const createIronSalida = (ironSalidaData) => {
    dispatch(postIronSalida(token, ironSalidaData));
  };

  const removeIronSalida = (id) => {
    dispatch(deleteIronSalida(token, id));
  };

  const editIronSalida = (id, updatedIronSalida) => {
    dispatch(updateIronSalida(token, updatedIronSalida, id));
  };

  return { ironSalida, createIronSalida, removeIronSalida, editIronSalida };
};
