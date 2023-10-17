import { useState } from 'react';
import '../styles/ui/addcatalogomodal.css';
import { useIronLlegada } from '../hooks/useIronLlegada';

export const AddIronLlegadaModal = ({ handleAddModal }) => {
  const [msgError, setMsgError] = useState(null);
  const { onPostIronLlegada } = useIronLlegada();
  const [inputsIronLlegada, setInputsIronLlegada] = useState({
    tipo_transporte: '',
    destino: '',
    ubicacion: '',
    numero_remision: '',
    codigo_medio: '',
  });

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
    onPostIronLlegada(inputsIronLlegada);
    handleAddModal()
    setInputsIronLlegada({
      tipo_transporte: '',
      destino: '',
      ubicacion: '',
      numero_remision: '',
      codigo_medio: '',
    });
  };

  return (
    <div className="add_modal">
      <h1>Añadir Remesa Iron Llegada</h1>
      <span
        onClick={() => handleAddModal()}
        className="material-symbols-outlined close"
      >
        close
      </span>
      <form className="add_modal_form" onSubmit={handleOnSubmit}>
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
        
        <button type="submit">Añadir Remesa</button>
      </form>
      {msgError && (
        <div className="error">
          <p>{msgError}</p>
        </div>
      )}
    </div>
  );
};