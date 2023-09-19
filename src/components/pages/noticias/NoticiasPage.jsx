import { Sidebar } from "../../../ui/sidebar"
import '../../../styles/components/noticiaspage.css'
import { Link } from "react-router-dom"
import { useState } from "react"

export const NoticiasPage = () => {

  const [activeBar, setActiveBar] = useState(null)

    const handleMenuBar = () => {
        setActiveBar(!activeBar)
    }

  return (
    <div className="container">
      <Sidebar 
        activeBar={activeBar} 
        handleMenuBar={handleMenuBar} 
      />
      <main>
        <h1>Noticias</h1>

        <div className="noticias">

          <div className="guardado_noticias">
            <div className="status_noticias">
              <div className="info_noticias">
                <h3>Total Catalogos</h3>
                <h1>16.000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className="porcentaje">
                  <p>+80%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="guardado_ironsalida">
            <div className="status_noticias">
              <div className="info_noticias">
                <h3>Total Iron Salida</h3>
                <h1>10.000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className="porcentaje">
                  <p>-40%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="guardado_ironllegada">
            <div className="status_noticias">
              <div className="info_noticias">
                <h3>Total Iron Llegada</h3>
                <h1>11.000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx='38' cy='38' r='36'></circle>
                </svg>
                <div className="porcentaje">
                  <p>20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empleado del mes */}

        <div className="nuevos_empleados">
          <h2>Empleados del Mes</h2>
          <div className="lista_empleados">
            <div className="empleado">
              <img src="https://media.istockphoto.com/id/1171169107/es/foto/retrato-de-joven-hombre-cauc%C3%A1sico-sonriente-con-los-brazos-cruzados-usando-reloj-inteligente-y.jpg?s=612x612&w=0&k=20&c=QQdny314cfuKaZX3HuqzAKKqVd5HIrWPZjdZvPAlCY8=" alt="empleado" />
              <h2>Camilo</h2>
              <p>Bogta D.C</p>
            </div>
            <div className="empleado">
              <img src="https://media.istockphoto.com/id/1207856385/es/foto/alegre-joven-afroamericano-feliz-en-retrato-de-gafas.jpg?s=612x612&w=0&k=20&c=BYBRvl-gTyz71sdKJHmNhO9wVSKYo-flgvBDqC5Innc=" alt="empleado" />
              <h2>Cristian</h2>
              <p>Cali</p>
            </div>
            <div className="empleado">
              <img src="https://media.istockphoto.com/id/1280113805/es/foto/sonrisa-joven-belleza-de-cerca-retrato.jpg?s=612x612&w=0&k=20&c=X1aTHQJJA9ewNOZwWA8AV9mw6UvyZafQX3PWWTt2T5M=" alt="empleado" />
              <h2>Angie</h2>
              <p>Medellin</p>
            </div>
            <div className="empleado">
              <img src="https://img.freepik.com/foto-gratis/hombre-joven-barba-gafas-redondas_273609-6191.jpg" alt="empleado" />
              <h2>Carlos</h2>
              <p>Bogota D.C</p>
            </div>
          </div>
        </div>

        {/* Catalogos Recientes */}

        <div className="catalogos_recientes">
          <h2>Catalogos Recientes</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Ubicacion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camilo</td>
                <td>08/12/2023</td>
                <td>En transito</td>
                <td>Bogota D.C</td>
              </tr>
              <tr>
                <td>Andre</td>
                <td>02/21/2023</td>
                <td>En transito</td>
                <td>Medellin</td>
              </tr>
              <tr>
                <td>Mariana</td>
                <td>12/12/2023</td>
                <td>En transito</td>
                <td>Cali</td>
              </tr>
              <tr>
                <td>Jairo</td>
                <td>07/18/2023</td>
                <td>En transito</td>
                <td>Cali</td>
              </tr>
            </tbody>
          </table>
          <Link to="/catalogo" className="btn">Ver todos</Link>
        </div>
      </main>


      {/* Menu derecha */}
      <div className="menu_opciones">
          <div className="nav">
            <button
            >
              <span 
                onClick={handleMenuBar}
                className="material-symbols-outlined"
              >
                menu
              </span>
            </button>
            <div className="dark-mode">
              <span className="material-symbols-outlined active">
                  light_mode
              </span>
              <span className="material-symbols-outlined">
                  dark_mode
              </span>
            </div>

            <div className="perfil_usuario">
              <div className="info">
                <p>hey, <b>Cam</b></p>
                <small className="text-muted">Admin</small>
              </div>
              <div className="foto_perfil">
                <img src="https://media.istockphoto.com/id/1171169107/es/foto/retrato-de-joven-hombre-cauc%C3%A1sico-sonriente-con-los-brazos-cruzados-usando-reloj-inteligente-y.jpg?s=612x612&w=0&k=20&c=QQdny314cfuKaZX3HuqzAKKqVd5HIrWPZjdZvPAlCY8=" alt="empleado" />
              </div>
            </div>
          </div>



          <div className="user_profile">
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Banco_Caja_Social_logo.svg/2560px-Banco_Caja_Social_logo.svg.png" alt="logo" />
                <h2>Banco Caja Social</h2>
                <p>Administrado Cintoteca Bogota</p>
              </div>
          </div>

          <div className="recordatorios">
                <div className="header">
                  <h2>Recordatorios</h2>
                  <span className="material-symbols-outlined">
                    notifications_none
                  </span>
                </div>
              </div>
        </div>


    </div>
  )
}