import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"
import { Filter } from '../../helpers/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import '../../../styles/components/ironLlegada.css';
import { Paginador } from '../../helpers/Paginador';
import { useIronLlegada} from '../../../hooks/useIronLlegada';
import { updateGetIronLlegada } from '../../../actions/ironLlegadaActions';
import { AddIronLlegadaModal } from '../../../ui/AddIronLlegadaModal';
import { EditIronLlegadaModal } from '../../../ui/EditIronLlegadaModal';
import { ShowIronLlegadaId } from '../../../ui/ShowIronLlegadaId';


export const IronLlegada = () => {
  const [ironLlegadaId, setIronLlegadaId] = useState('');  
  const [errorState, setErrorState] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const { ironLlegada, onDeleteIronLlegada, onGetIronLlegadaById, filters, } = useIronLlegada( inputSearch );
  const user = useSelector((state) => state?.user.user);
  const error = useSelector((state) => state?.ironLlegada.error);
  const dispatch = useDispatch()

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  const handleEditModal = (id) => {
    dispatch(updateGetIronLlegada(id));
    setIronLlegadaId(id);
    setEditModal(!editModal);
  };

  const handleInfoModal = (id) => {
    if(!id) return setInfoModal(!infoModal);
    onGetIronLlegadaById(id);
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
        <div className="ironLlegada_add">
            <h1>Iron Llegada</h1>
            <span
                
                className="material-symbols-outlined add"
              >
                add_circle
              </span>
          </div>
          <Filter 
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
          />
          <table className="ironLlegada_table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Tipo Transporte</th>
              <th>Destino</th>
              <th>Ubicacion</th>
              <th>Numero Remision</th>
              <th>Codigo Medio</th>
              <th
                style={{ cursor: 'pointer' }}
              >Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {ironLlegada &&
              filters.map((ironLlegada) => {
                return (
                  <tr key={ironLlegada.id}>
                    <td>{ironLlegada.usuario.name || user}</td>
                    <td>{ironLlegada.tipo_transporte || ''}</td>
                    <td>{ironLlegada.destino || ''}</td>
                    <td>{ironLlegada.ubicacion || ''}</td>
                    <td>{ironLlegada.numero_remision || ''}</td>
                    <td>{ironLlegada.codigo_medio || ''}</td>
                    <td>
                      {moment(ironLlegada.createdAt).format(
                        'DD/MM/YYYY hh:mm:ss a'
                      ) || ''}
                    </td>
                    <td>
                      <span
                        onClick={() => handleEditModal(ironLlegada.id)}
                        title="Editar"
                        className="material-symbols-outlined edit"
                      >
                        edit
                      </span>
                      <span
                        onClick={() => onDeleteIronLlegada(ironLlegada.id)}
                        title="Eliminar"
                        className="material-symbols-outlined delete"
                      >
                        delete
                      </span>
                      <span
                        onClick={() => handleInfoModal(ironLlegada.id)}
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
            <AddIronLlegadaModal handleAddModal={handleAddModal} />
          ) : null}
          {editModal ? (
            <EditIronLlegadaModal
            ironLlegadaId={ironLlegadaId}
              handleEditModal={handleEditModal}
            />
          ) : null}
          {infoModal ? (
            <ShowIronLlegadaId handleInfoModal={handleInfoModal} />
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
  )
}