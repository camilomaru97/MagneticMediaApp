import { useDispatch, useSelector } from 'react-redux';
import { getCatalogos } from '../actions/catalogoActions';
import { useEffect } from 'react';

export const useCatalogo = () => {
  const token = useSelector((state) => state?.user?.token);
  const catalogos = useSelector((state) => state?.catalogo?.catalogos);
  const dispatch = useDispatch();


  const tableContent = [
    { nombre: 'Camilo', fecha: '28/08/2023', estado: 'En transito'},
    { nombre: 'Angie', fecha: '11/02/2023', estado: 'Activo'},
    { nombre: 'Cristian', fecha: '02/11/2023', estado: 'En transito'},
    { nombre: 'Andrea', fecha: '22/10/2023', estado: 'En transito'},
    { nombre: 'Maria', fecha: '18/04/2023', estado: 'Finalizado'},
  ]

  useEffect(() => {
    dispatch(getCatalogos(token));
  }, []);

  return {
    catalogos
  }
};
