import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/ui/editcatalogomodal.css';
import { useIronLlegada } from '../hooks/useIronLlegada';

export const EditIronLlegadaModal = ({ handleEditModal, ironLlegadaId }) => {
  const ironLlegadas = useSelector((state) => state.ironLlegada.ironLlegadas);
  const ironLlegadasToUpdate = useSelector((state) => state.ironLlegada.ironLlegadaToUpdate[0]);
  const user = useSelector((state) => state.user);
  const [msgError, setMsgError] = useState(null);
  const [inputsIronLlegada, setInputsIronLlegada] = useState({
    tipo_transporte: '',
    destino: '',
    ubicacion: '',
    numero_remision: '',
    codigo_medio: '',
  });
  const { onPutIronLlegada } = useIronLlegada();
  const getIronLlegadaById = ironLlegadas?.find(
    (ironLlegada) => ironLlegada.id === ironLlegadaId
  );

  useEffect( () => {
    const validUserIronLlegada = ironLlegadaToUpdate?.usuario?._id === user.id;
    !validUserIronLlegada
    ? setMsgError('No tienes permisos para editar esta remesa')
    : setMsgError(null);
  }, [user.id])

  

  useEffect(() => {
    setInputsIronLlegada({
      tipo_transporte: getIronLlegadaById?.tipo_transporte,
      destino: getIronLlegadaById?.destino,
      ubicacion: getIronLlegadaById?.ubicacion,
      numero_remision: getIronLlegadaById?.numero_remision,
      codigo_medio: getIronLlegadaById?.codigo_medio,
    });
  }, [getIronLlegadaById]);

  const hanldeOnChange = (e) => {
    setInputsIronLlegada({
      ...inputsIronLlegada,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validate = Object.values(inputsIronLlegada).every(
      (input) => input !== ''
    );
    if (!validate) {
      setMsgError('Todos los campos son obligatorios');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return;
    }
    if (
      inputsIronLlegada.numero_remision.length < 10 ||
      inputsIronLlegada.numero_remision.length > 20
    ) {
      setMsgError('El numero de remision debe ser entre 10 y 20 numeros');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return;
    }
    if (
      inputsIronLlegada.codigo_medio.length == 8
    ) {
      setMsgError('El codigo del medio debe de ser de 8 caracteres');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return;
    }
    onPutIronLlegada(inputsIronLlegada, ironLlegadaId);
    handleEditModal();
    setInputsIronLlegada({
      tipo_transporte: '',
      destino: '',
      ubicacion: '',
      numero_remision: '',
      codigo_medio: '',
    });
  };

  return (
    <div className="edit_modal">
      <h1>Editar Remesa Iron Llegada</h1>
      <span
        onClick={() => handleEditModal()}
        className="material-symbols-outlined close"
      >
        close
      </span>
      <form className="edit_modal_form" onSubmit={handleOnSubmit}>
        <select
          value={inputsIronLlegada.tipo_transporte}
          onChange={hanldeOnChange}
          name="tipo_transporte"
        >
          <option value="">Tipo Transporte</option>
          <option value="1149">1149</option>
          <option value="3774">3774</option>
          <option value="5009">5009</option>
        </select>	
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Numero Remision"
          value={inputsIronLlegada.numero_remision}
          name="numero_remision"
        />
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Codigo Medio"
          value={inputsIronLlegada.codigo_medio}
          name="codigo_medio"
        /> 	 
       	<input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Destino"
          value={inputsIronLlegada.destino}
          name="destino"
        /> 
        <input
            onChange={hanldeOnChange}
            type="text"
            placeholder="Ubicacion"
            value="Calle 59"
            readOnly
            name="ubicacion"
        />

        <button disabled={msgError} type="submit">Editar Remesa</button>
      </form>
      {msgError && (
        <div className="error">
          <p style={{fontWeight: '400'}}>{msgError}</p>
        </div>
      )}
    </div>
  );
};