import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  postIronSalida,
  updateIronSalida,
} from "../../actions/ironSalidaActions"; // Ajusta la ruta según sea necesario

export const FormSalida = ({ editData }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.user?.token);
  const { error, loading } = useSelector((state) => state?.ironSalida);

  console.log(editData);

  const initialFormData = editData
    ? {
        usuario: editData.usuario ? editData.usuario.name : "SIN NAME",
        destino: editData.destino,
        ubicacion: editData.ubicacion,
        tipo_transporte: editData.tipo_transporte,
        numero_remision: editData.numero_remision.toString(),
        codigo_medio: editData.codigo_medio,
        fecha_salida: moment(editData.fecha_salida).format("YYYY-MM-DDTHH:mm"),
        fecha_devolucion: moment(editData.fecha_devolucion).format(
          "YYYY-MM-DDTHH:mm"
        ),
        id: editData.id,
      }
    : {
        id: "",
        usuario: "Alexader Nova",
        destino: "Bogota",
        ubicacion: "Cajica",
        tipo_transporte: "3774", // valor por defecto
        numero_remision: "12345678900",
        codigo_medio: "12345642",
        fecha_salida: moment().format("YYYY-MM-DDTHH:mm"),
        fecha_devolucion: moment().add(1, "days").format("YYYY-MM-DDTHH:mm"),
      };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let errors = {};

    // Validaciones de usuario
    if (!data.usuario) {
      errors.usuario = "El usuario es requerido.";
    }

    // Validaciones de número de remisión
    if (data.numero_remision.length < 10) {
      errors.numero_remision =
        "El número de remisión debe tener al menos 10 caracteres.";
    } else if (data.numero_remision.length > 20) {
      errors.numero_remision =
        "El número de remisión no debe exceder los 20 caracteres.";
    } else if (!/^\d+$/.test(data.numero_remision)) {
      errors.numero_remision = "El número de remisión debe ser numérico.";
    }

    // Validaciones de código de medios
    if (data.codigo_medio.length < 8) {
      errors.codigo_medio =
        "El código de medio debe tener al menos 8 caracteres.";
    } else if (data.codigo_medio.length > 8) {
      errors.codigo_medio =
        "El código de medio no debe exceder los 8 caracteres.";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Datos del formulario:", formData);
      if (editData) {
        dispatch(updateIronSalida(token, formData, editData.id)); // Asumiendo que editData contiene un campo 'id'
      } else {
        dispatch(postIronSalida(token, formData));
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "720px",
          padding: "20px",
        }}
      >
        <div style={{ color: "red" }}>
          {!loading && error && <> {error} </>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Usuario</label>

          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleInputChange}
            placeholder="Usuario"
            style={{
              padding: "10px",
              width: "100%",
              border: errors.usuario ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {errors.usuario && (
            <span style={{ color: "red" }}>{errors.usuario}</span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Destino</label>

          <input
            type="text"
            name="destino"
            value={formData.destino}
            onChange={handleInputChange}
            placeholder="Destino"
            style={{
              padding: "10px",
              width: "100%",
              border: errors.destino ? "2px solid red" : "1px solid #ddd",
            }}
          />

          {errors.destino && (
            <span style={{ color: "red" }}>{errors.destino}</span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Ubicacion</label>

          <input
            type="text"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleInputChange}
            placeholder="Ubicación"
            style={{
              padding: "10px",
              width: "100%",
              border: errors.ubicacion ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {errors.ubicacion && (
            <span style={{ color: "red" }}>{errors.ubicacion}</span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Remision</label>

          <input
            type="text"
            name="numero_remision"
            value={formData.numero_remision}
            onChange={handleInputChange}
            placeholder="Número de Remisión"
            style={{
              padding: "10px",
              width: "100%",
              border: errors.numero_remision
                ? "2px solid red"
                : "1px solid #ddd",
            }}
          />
          {errors.numero_remision && (
            <span style={{ color: "red" }}>{errors.numero_remision}</span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Codgo medio</label>

          <input
            type="text"
            name="codigo_medio"
            value={formData.codigo_medio}
            onChange={handleInputChange}
            placeholder="Código del Medio"
            style={{
              padding: "10px",
              width: "100%",
              border: errors.codigo_medio ? "2px solid red" : "1px solid #ddd",
            }}
          />
          {errors.codigo_medio && (
            <span style={{ color: "red" }}>{errors.codigo_medio}</span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Fecha Salida</label>

          <input
            type="datetime-local"
            name="fecha_salida"
            value={formData.fecha_salida}
            onChange={handleInputChange}
            style={{ padding: "10px", width: "100%", border: "1px solid #ddd" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="">Fecha Devolucion</label>

          <input
            type="datetime-local"
            name="fecha_devolucion"
            value={formData.fecha_devolucion}
            onChange={handleInputChange}
            style={{ padding: "10px", width: "100%", border: "1px solid #ddd" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editData ? "Actualizar" : "Enviar"}
        </button>
      </form>
    </div>
  );
};
