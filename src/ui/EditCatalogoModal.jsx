import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/ui/editcatalogomodal.css';
import { useCatalogo } from '../hooks/useCatalogo';

export const EditCatalogoModal = ({ handleEditModal, catalogoId }) => {
  const catalogos = useSelector((state) => state.catalogo.catalogos);
  const [msgError, setMsgError] = useState(null);
  const [inputsCatalogo, setInputsCatalogo] = useState({
    numero_ip: '',
    nombre_servidor: '',
    nombre_catalogo: '',
    consola: '',
    ciclo: '',
    programa: '',
    tecnologia: '',
  });
  const { onPutCatalogo } = useCatalogo();
  const getCatalogoById = catalogos?.find(
    (catalogo) => catalogo.id === catalogoId
  );

  useEffect(() => {
    setInputsCatalogo({
      numero_ip: getCatalogoById?.numero_ip,
      nombre_servidor: getCatalogoById?.nombre_servidor,
      nombre_catalogo: getCatalogoById?.nombre_catalogo,
      consola: getCatalogoById?.consola,
      ciclo: getCatalogoById?.ciclo,
      programa: getCatalogoById?.programa,
      tecnologia: getCatalogoById?.tecnologia,
    });
  }, [getCatalogoById]);

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
      return;
    }
    if (
      inputsCatalogo.nombre_catalogo.length < 4 ||
      inputsCatalogo.nombre_catalogo.length > 30
    ) {
      setMsgError('El nombre del catalogo debe tener entre 4 y 30 caracteres');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return;
    }
    onPutCatalogo(inputsCatalogo, catalogoId);
    handleEditModal();
    setInputsCatalogo({
      numero_ip: '',
      nombre_servidor: '',
      nombre_catalogo: '',
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
          value={inputsCatalogo.numero_ip}
          name="numero_ip"
        />
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Nombre Servidor"
          value={inputsCatalogo.nombre_servidor}
          name="nombre_servidor"
        />
        <input
          onChange={hanldeOnChange}
          type="text"
          placeholder="Nombre Catalogo"
          value={inputsCatalogo.nombre_catalogo}
          name="nombre_catalogo"
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
