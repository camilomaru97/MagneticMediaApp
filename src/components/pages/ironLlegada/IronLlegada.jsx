import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"
import { Filter } from '../../helpers/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../styles/components/ironLlegada.css';
import { Paginador } from '../../helpers/Paginador';


export const IronLlegada = () => {
  


  return (
    <div className="container">
      <Sidebar />
      <main>
        <div className="ironLlegada_add">
            <h1>Iron Llegada</h1>
            <span
                
                className="material-symbols-outlined add"
              >
                add_circle
              </span>
          </div>
          <Filter 
          
          />
          <table className="ironLlegada_table">
          <thead>
            <tr>
              <th>Tipo Transporte</th>
              <th>Destino</th>
              <th>Ubicacion</th>
              <th>Numero Remision</th>
              <th>Codigo Medio</th>
              <th
                style={{ cursor: 'pointer' }}
              >Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
          
        </table>
        <Paginador />
      </main>
      <MenuOpciones />
    </div>
  )
}