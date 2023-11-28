import { MenuOpciones } from "../../../ui/MenuOpciones";
import { Sidebar } from "../../../ui/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { ModalWell } from "../../../ui/modalsIronSalida/ModalWell";
import { FormSalida } from "../../../ui/modalsIronSalida/FormSalida";
import { useState } from "react";
import { deleteIronSalida } from "../../../actions/ironSalidaActions";
import Swal from "sweetalert2";

export const IronSalida = () => {
  const { ironSalida } = useSelector((state) => state?.ironSalida);
  const dispatch = useDispatch();

  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log("ironSalida ", ironSalida);

  const handleEditModal = (itemId) => {
    const itemToEdit = ironSalida.find((item) => item.id === itemId);
    setSelectedItem(itemToEdit);
    setIsModalEditOpen(true);
  };

  const onDeleteIronLlegada = (itemId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteIronSalida(itemId));
        Swal.fire("Eliminado!", "El registro ha sido eliminado.", "success");
      }
    });
  };

  return (
    <div className="container">
      <Sidebar />
      <main>
        <div className="ironLlegada_add">
          <h1>Iron Salida</h1>
          <span
            onClick={() => setIsModalAddOpen(true)}
            className="material-symbols-outlined add"
          >
            add_circle
          </span>
        </div>
        <table className="ironLlegada_table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Tipo</th>
              <th>Destino</th>
              <th>Ubicacion</th>
              <th># Remision</th>
              <th>Codigo Medio</th>
              <th style={{ cursor: "pointer" }}>Fecha Salida</th>
              <th style={{ cursor: "pointer" }}>Fecha Devolucion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ironSalida.map((item, i) => (
              <tr key={`itrsal - i${i}`}>
                <td>{item.usuario ? item.usuario.name : "N/A"}</td>
                <td>{item.tipo_transporte ?? "NO TYPE"}</td>
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
                    onClick={() => handleEditModal(item.id)}
                    title="Editar"
                    className="material-symbols-outlined edit"
                  >
                    edit
                  </span>
                  <span
                    onClick={() => onDeleteIronLlegada(item.id)}
                    title="Eliminar"
                    className="material-symbols-outlined delete"
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ModalWell handleIsOpen={setIsModalAddOpen} isOpen={isModalAddOpen}>
          <FormSalida />
        </ModalWell>

        <ModalWell handleIsOpen={setIsModalEditOpen} isOpen={isModalEditOpen}>
          {selectedItem && <FormSalida editData={selectedItem} />}
        </ModalWell>
      </main>
      <MenuOpciones />
    </div>
  );
};
