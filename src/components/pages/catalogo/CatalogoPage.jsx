import { MenuOpciones } from '../../../ui/MenuOpciones';
import { Sidebar } from '../../../ui/Sidebar';
import '../../../styles/components/catalogo.css';
import { Filter } from '../../helpers/Filter';
import { useState } from 'react';
import { useCatalogo } from '../../../hooks/useCatalogo';
import moment from 'moment/moment';
import { AddCatalogoModal } from '../../../ui/AddCatalogoModal';
import { EditCatalogoModal } from '../../../ui/EditCatalogoModal';
import { ShowCatalogoId } from '../../../ui/ShowCatalogoId';

export const CatalogoPage = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const { catalogos } = useCatalogo();
  console.log(catalogos);

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleInfoModal = () => {
    setInfoModal(!infoModal);
  };

  return (
    <div className="container">
      <Sidebar />
      <main>
        <div className="catalog_add">
          <h1>Catalogos</h1>
          <span
            onClick={handleAddModal}
            className="material-symbols-outlined add"
          >
            add_circle
          </span>
        </div>
        <Filter />
        <table className="catalogo_table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciclo</th>
              <th>Tecnologia</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {catalogos.map((catalogo) => {
              return (
                <tr key={catalogo.id}>
                  <td>{catalogo.usuario.name}</td>
                  <td>{catalogo.ciclo}</td>
                  <td>{catalogo.tecnologia}</td>
                  <td>
                    {moment(catalogo.createdAt).format('DD/MM/YYYY hh:mm:ss a')}
                  </td>
                  <td>
                    <span
                      onClick={handleEditModal}
                      title="Editar"
                      className="material-symbols-outlined edit"
                    >
                      edit
                    </span>
                    <span
                      title="Eliminar"
                      className="material-symbols-outlined delete"
                    >
                      delete
                    </span>
                    <span
                      onClick={handleInfoModal}
                      title="Ver"
                      className="material-symbols-outlined delete"
                    >
                      feature_search
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {addModal ? (
            <AddCatalogoModal handleAddModal={handleAddModal} />
          ) : null}
          {editModal ? (
            <EditCatalogoModal handleEditModal={handleEditModal} />
          ) : null}
          {infoModal ? (
            <ShowCatalogoId handleInfoModal={handleInfoModal} />
          ) : null}
        </table>
        <p>{`< 7 de 20 >`}</p>
      </main>
      <MenuOpciones />
    </div>
  );
};
