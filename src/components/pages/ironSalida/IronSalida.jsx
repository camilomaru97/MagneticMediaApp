import { MenuOpciones } from "../../../ui/MenuOpciones";
import { Sidebar } from "../../../ui/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";

export const IronSalida = () => {
  const { ironSalida } = useSelector((state) => state?.ironSalida);
  const dispatch = useDispatch();

  console.log("ironSalida ", ironSalida);

  const handleEditModal = () => {};
  const onDeleteIronLlegada = () => {};
  const handleInfoModal = () => {};
  const handleAddModal = () => {
    
  };

  return (
    <div className="container">
      <Sidebar />
      <main>
        <div className="ironLlegada_add">
          <h1>Iron Salida</h1>
          <span
            onClick={handleAddModal}
            className="material-symbols-outlined add"
          >
            add_circle
          </span>
        </div>
        <table className="ironLlegada_table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Tipo Transporte</th>
              <th>Destino</th>
              <th>Ubicacion</th>
              <th>Numero Remision</th>
              <th>Codigo Medio</th>
              <th style={{ cursor: "pointer" }}>Fecha Salida</th>
              <th style={{ cursor: "pointer" }}>Fecha Devolucion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ironSalida.map((item) => (
              <tr key={item.id}>
                <td>{item.usuario ? item.usuario.name : "N/A"}</td>
                <td>{item.tipo_transporte}</td>
                <td>{item.destino}</td>
                <td>{item.ubicacion}</td>
                <td>{item.numero_remision}</td>
                <td>{item.codigo_medio}</td>

                <td>
                  {moment(item.fecha_salida).format("DD/MM/YYYY hh:mm:ss a") ||
                    ""}
                </td>

                <td>
                  {moment(item.fecha_devolucion).format(
                    "DD/MM/YYYY hh:mm:ss a"
                  ) || ""}
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
            ))}
          </tbody>
        </table>
      </main>
      <MenuOpciones />
    </div>
  );
};
