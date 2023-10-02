import { useState } from 'react';
import '../styles/ui/editcatalogomodal.css';

export const EditCatalogoModal = ({ handleEditModal }) => {
  const [msgError, setMsgError] = useState(null);
  const [inputsCatalogo, setInputsCatalogo] = useState({
    numeroIp: '',
    nombreServidor: '',
    nombreCatalogo: '',
    consola: '',
    ciclo: '',
    programa: '',
    tecnologia: '',
  });

  const hanldeOnChange = (e) => {
    setInputsCatalogo({
      ...inputsCatalogo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const validate = Object.values(inputsCatalogo).every(
      (input) => input !== ''
    );
    if (!validate) {
      setMsgError('Todos los campos son obligatorios');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return 
    }
    if (
      inputsCatalogo.nombreCatalogo.length < 4 ||
      inputsCatalogo.nombreCatalogo.length > 30
    ) {
      setMsgError('El nombre del catalogo debe tener entre 4 y 30 caracteres');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return
    }
    // TODO: console.log('enviar datos al backend');
    console.log(inputsCatalogo);
    setInputsCatalogo({
        numeroIp: '',
        nombreServidor: '',
        nombreCatalogo: '',
        consola: '',
        ciclo: '',
        programa: '',
        tecnologia: '',
    });
  };

  return (
    <div className="edit_modal">
      <h1>Editar Catalogo</h1>
      <span
        onClick={() => handleEditModal()}
        className="material-symbols-outlined close"
      >
        close
      </span>
      <form className="edit_modal_form" onSubmit={handleOnSubmit}>
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Numero IP"
          value={inputsCatalogo.numeroIp}
          name="numeroIp"
        />
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Nombre Servidor"
          value={inputsCatalogo.nombreServidor}
          name="nombreServidor"
        />
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Nombre Catalogo"
          value={inputsCatalogo.nombreCatalogo}
          name="nombreCatalogo"
        />
        <select
          onChange={hanldeOnChange}
          value={inputsCatalogo.consola}
          name="consola"
        >
          <option value="">Consola</option>
          <option value="Zona Franca">Zona Franca</option>
          <option value="Suba">Suba</option>
          <option value="Calle 59">Calle 59</option>
          <option value="Tarjde">Tarjde</option>
        </select>
        <select
          onChange={hanldeOnChange}
          value={inputsCatalogo.ciclo}
          name="ciclo"
        >
          <option value="">Ciclo</option>
          <option value="Diario">Diario</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensual">Mensual</option>
        </select>
        <select
          onChange={hanldeOnChange}
          value={inputsCatalogo.programa}
          name="programa"
        >
          <option value="">Programa</option>
          <option value="Dataprotector">Dataprotector</option>
          <option value="Commvault">Commvault</option>
        </select>
        <select
          onChange={hanldeOnChange}
          value={inputsCatalogo.tecnologia}
          name="tecnologia"
        >
          <option value="">Tecnologia</option>
          <option value="LT08">LT08</option>
          <option value="LT07">LT07</option>
          <option value="LT06">LT06</option>
          <option value="LT04">LT04</option>
        </select>
        <button type="submit">Editar Catalogo</button>
      </form>
      {msgError && (
        <div className="error">
          <p>{msgError}</p>
        </div>
      )}
    </div>
  );
};
