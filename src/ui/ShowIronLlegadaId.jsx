import { useSelector } from 'react-redux';
import '../styles/ui/showcatalogo.css'
import moment from 'moment';

export const ShowIronLlegadaId = ({ handleInfoModal }) => {

  const ironLlegadaById = useSelector(state => state?.ironLlegada?.ironLlegadaById)

  return (
    <div className="info_modal">
      <h1>Informacion Remesa Iron Llegada</h1>
      <span
        onClick={() => handleInfoModal()}
        className="material-symbols-outlined close"
      >
        close
      </span>
        {
          ironLlegadaById &&
          <section className='info_modal_box'>
              <p>Tipo Transporte: &nbsp; <span> { ironLlegadaById.tipo_transporte || '' } </span></p>
              <p>Destino: &nbsp; <span> { ironLlegadaById.destino || '' } </span></p>
              <p>Ubicacion: &nbsp; <span> { ironLlegadaById.ubicacion || '' } </span></p>
              <p>Numero Remision: &nbsp; <span> { ironLlegadaById.numero_remision || '' } </span></p>
              <p>Codigo Medio: &nbsp; <span> { ironLlegadaById.codigo_medio || '' } </span></p>
              <p>Nombre Usuario: &nbsp; <span> { ironLlegadaById.usuario.name || '' } </span></p>              
              <p>Fecha de creación: &nbsp; <span> { moment(ironLlegadaById.createAt).format('DD/MM/YYYY hh:mm:ss a') || '' } </span></p>
          </section>
        }
        
    </div>
  );
};