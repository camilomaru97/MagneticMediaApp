import { MenuOpciones } from '../../../ui/MenuOpciones';
import { Sidebar } from '../../../ui/Sidebar';
import '../../../styles/components/catalogo.css';
import { Filter } from '../../helpers/Filter';
import { useEffect, useState } from 'react';
import { useCatalogo } from '../../../hooks/useCatalogo';
import moment from 'moment/moment';
import { AddCatalogoModal } from '../../../ui/AddCatalogoModal';
import { EditCatalogoModal } from '../../../ui/EditCatalogoModal';
import { ShowCatalogoId } from '../../../ui/ShowCatalogoId';
import { useDispatch, useSelector } from 'react-redux';
import { updateGetCatalogo } from '../../../actions/catalogoActions';
import { Paginador } from '../../helpers/Paginador';

export const CatalogoPage = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [catalogoId, setCatalogoId] = useState('');
  const [infoModal, setInfoModal] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  const { catalogos, onDeleteCatalogo, onGetCatalogoById, filters, } = useCatalogo( inputSearch );
  const user = useSelector((state) => state?.user.user);
  const error = useSelector((state) => state?.catalogo.error);
  const dispatch = useDispatch()

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleEditModal = (id) => {
    dispatch(updateGetCatalogo(id));
    setCatalogoId(id);
    setEditModal(!editModal);
  };

  const handleInfoModal = (id) => {
    if(!id) return setInfoModal(!infoModal);
    onGetCatalogoById(id);
    setInfoModal(!infoModal);
  };

  useEffect(() => {
    if (error) {
      setErrorState(true);
      setTimeout(() => {
        setErrorState(false);
      }, 5000);
    }
  }, [error]);

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
        <Filter 
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
        <table className="catalogo_table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Ciclo</th>
              <th>Tecnologia</th>
              <th
                style={{ cursor: 'pointer' }}
              >Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {catalogos &&
              filters.map((catalogo) => {
                return (
                  <tr key={catalogo.id}>
                    <td>{catalogo.usuario.name || user}</td>
                    <td>{catalogo.ciclo || ''}</td>
                    <td>{catalogo.tecnologia || ''}</td>
                    <td>
                      {moment(catalogo.createdAt).format(
                        'DD/MM/YYYY hh:mm:ss a'
                      ) || ''}
                    </td>
                    <td>
                      <span
                        onClick={() => handleEditModal(catalogo.id)}
                        title="Editar"
                        className="material-symbols-outlined edit"
                      >
                        edit
                      </span>
                      <span
                        onClick={() => onDeleteCatalogo(catalogo.id)}
                        title="Eliminar"
                        className="material-symbols-outlined delete"
                      >
                        delete
                      </span>
                      <span
                        onClick={() => handleInfoModal(catalogo.id)}
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
            <EditCatalogoModal
              catalogoId={catalogoId}
              handleEditModal={handleEditModal}
            />
          ) : null}
          {infoModal ? (
            <ShowCatalogoId handleInfoModal={handleInfoModal} />
          ) : null}
        </table>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {errorState && (
            <p style={{ marginLeft: '-13rem', color: '#FF0060', }}>{error}</p>
          )}
        </div>
      <Paginador />
      </main>
      <MenuOpciones />
    </div>
  );
};
