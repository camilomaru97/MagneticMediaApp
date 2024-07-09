import { useSelector } from 'react-redux';
import '../styles/ui/showcatalogo.css'
import moment from 'moment';

export const ShowCatalogoId = ({ handleInfoModal }) => {

  const catalogoById = useSelector(state => state?.catalogo?.catalogoById)

  return (
    <div className="info_modal">
      <h1>Informacion Catalogo</h1>
      <span
        onClick={() => handleInfoModal()}
        className="material-symbols-outlined close"
      >
        close
      </span>
        {
          catalogoById &&
          <section className='info_modal_box'>
              <p>Ciclo: &nbsp; <span> { catalogoById.ciclo || '' } </span></p>
              <p>Consola: &nbsp; <span> { catalogoById.consola || '' } </span></p>
              <p>Programa: &nbsp; <span> { catalogoById.programa || '' } </span></p>
              <p>Tecnologia: &nbsp; <span> { catalogoById.tecnologia || '' } </span></p>
              <p>Numero Ip: &nbsp; <span> { catalogoById.numero_ip || '' } </span></p>
              <p>Nombre Usuario: &nbsp; <span> { catalogoById.usuario.name || '' } </span></p>
              <p>Nombre Servidor: &nbsp; <span> { catalogoById.nombre_servidor || '' } </span></p>
              <p>Nombre Catalogo: &nbsp; <span> { catalogoById.nombre_catalogo || '' } </span></p>
              <p>Fecha de creación: &nbsp; <span> { moment(catalogoById.createAt).format('DD/MM/YYYY hh:mm:ss a') || '' } </span></p>
          </section>
        }
        
    </div>
  );
};
