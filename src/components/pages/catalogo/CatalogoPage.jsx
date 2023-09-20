import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"
import '../../../styles/components/catalogo.css'
import { Filter } from "../../helpers/Filter"
import { AddModal } from "../../../ui/AddModal"
import { useState } from "react"
import { EditModal } from "../../../ui/EditModal"

export const CatalogoPage = () => {

  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleAddModal = () => {
    setAddModal(!addModal)
  }

  const handleEditModal = () => {
    setEditModal(!editModal)
  }

  const tableContent = [
    { nombre: 'Camilo', fecha: '28/08/2023', estado: 'En transito'},
    { nombre: 'Angie', fecha: '11/02/2023', estado: 'Activo'},
    { nombre: 'Cristian', fecha: '02/11/2023', estado: 'En transito'},
    { nombre: 'Andrea', fecha: '22/10/2023', estado: 'En transito'},
    { nombre: 'Maria', fecha: '18/04/2023', estado: 'Finalizado'},
    { nombre: 'Camilo', fecha: '28/08/2023', estado: 'En transito'},
    { nombre: 'Angie', fecha: '11/02/2023', estado: 'Activo'},
  ]

  return (
    <div className="container">
      <Sidebar />
      <main>
        <div className="catalog_add">
          <h1>Catalogos</h1>
          <span onClick={handleAddModal} className="material-symbols-outlined add">
            add_circle
          </span>
        </div>
        <Filter />
        <table className="catalogo_table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              tableContent.map(row => {
                return (
                  <tr
                    key={row.nombre}
                  >
                    <td>{row.nombre}</td>
                    <td>{row.fecha}</td>
                    <td>{row.estado}</td>
                    <td>
                      <span onClick={handleEditModal} title="Editar" className="material-symbols-outlined edit">
                        edit
                      </span>
                      <span title="Eliminar" className="material-symbols-outlined delete">
                        delete
                      </span>
                      <span title="Ver" className="material-symbols-outlined delete">
                        feature_search
                      </span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
          { addModal 
            ? <AddModal 
                handleAddModal={handleAddModal} 
              /> 
            : null
          }
          { editModal 
            ? <EditModal 
                handleEditModal={handleEditModal} 
              /> 
            : null
          }
        </table>
        <p>{`< 7 de 20 >`}</p>
      </main>
      <MenuOpciones />
    </div>
  )
}