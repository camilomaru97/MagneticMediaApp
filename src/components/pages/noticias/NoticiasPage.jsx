import { Sidebar } from "../../../ui/Sidebar"
import '../../../styles/components/noticiaspage.css'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { MenuOpciones } from "../../../ui/MenuOpciones"
import { useTranslation } from "react-i18next"
import { useIronSalida } from "../../../hooks/useIronSalida"
import { useCatalogo } from "../../../hooks/useCatalogo"
import { useIronLlegada } from "../../../hooks/useIronLlegada"
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import moment from 'moment/moment';

export const NoticiasPage = () => {

	const [activeBar, setActiveBar] = useState(null)
	const [t, i18n] = useTranslation('global')
  const catalogos = useSelector( state => state?.catalogo?.catalogos)
  const ironLlegadas = useSelector( state => state?.ironLlegada?.ironLlegadas)
  const ironSalida = useSelector( state => state?.ironSalida?.ironSalida)

  useIronSalida()
  useCatalogo()
  useIronLlegada()

  const generarPDF = () => {
    const doc = new jsPDF()
    doc.text('Reporte General Magnetic Media', 10, 10)
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Banco_Caja_Social_logo.svg/2560px-Banco_Caja_Social_logo.svg.png"
    doc.addImage(imageUrl, 'JPEG', 150, 5, 40, 12); 

    const columnsCatalogo = ['Nombre Usuario', 'IP Catalogo', 'Fecha', 'Ciclo', 'Tecnologia']
    const copyCatalogos = [...catalogos].slice(0,7)
    const catalogosTable = copyCatalogos.map( catalogo => {
      return [catalogo?.usuario?.name, catalogo.numero_ip, moment(catalogo?.createdAt).format('DD/MM/YYYY hh:mm:ss a'), catalogo?.ciclo, catalogo?.tecnologia]
    })

    const columnsironSalida = ['Nombre Usuario', 'Fecha', 'Ubicaion', 'Codigo Medio', 'Destino']
    const copyIronSalida = [...ironSalida].slice(0,7)
    const ironSalidaTable = copyIronSalida.map( iron => {
      return [iron?.usuario?.name, moment(iron?.createdAt).format('DD/MM/YYYY hh:mm:ss a'), iron?.ubicacion, iron?.codigo_medio, iron?.destino]
    })

    const columnsironLlegada = ['Nombre Usuario', 'Ubicacion', 'Destino', 'Codigo Medio', 'Tipo Transporte']
    const copyIronLlegada = [...ironLlegadas].slice(0,7)
    const ironLlegadaTable = copyIronLlegada.map( iron => {
      return [iron?.usuario?.name, iron?.ubicacion, iron?.destino, iron?.codigo_medio, iron?.tipo_transporte]
    })
    
    doc.setFontSize(12);
    doc.text(`Ultimas 7 Cintas en Catalogo, Total de: ${catalogos.length} cintas registradas`, 13, 21)
    autoTable(doc, {
      startY: 25,
      head: [columnsCatalogo],
      body: catalogosTable,
    });


    doc.text(`Ultimas 7 Cintas en Iron Salida, Total de: ${ironSalida.length} cintas registradas `, 13, 98)
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 15,
      head: [columnsironSalida],
      body: ironSalidaTable,
    });

    doc.text(`Ultimas 7 Cintas en Iron Llegada, Total de: ${ironLlegadas.length} cintas registradas`, 13, 172)
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 15,
      head: [columnsironLlegada],
      body: ironLlegadaTable,
    });
    doc.save('ReporteCintoteca.pdf')
  }


		const handleMenuBar = () => {
			setActiveBar(!activeBar)
			console.log(activeBar)
		}

	return (
		<div className="container">
			<Sidebar 
				handleMenuBar={handleMenuBar}
				activeBar={activeBar} 
			/>
			<main>
        <div className="container_news">
          <h1>{t('noticias.noticias')}</h1>
          <div className="container_news_translate">
            <span class="material-symbols-outlined">
              g_translate
            </span>
            <button onClick={() => i18n.changeLanguage('es')} style={{ background: 'none', cursor: 'pointer', marginRight: '.5rem', marginLeft: '.5rem', marginTop: '2px', color: '#6C9BCF'}}>
              EN
            </button>
            <button onClick={() => i18n.changeLanguage('en')} style={{ background: 'none', cursor: 'pointer', marginTop: '2px', color: '#1B9C85'}}>
              ES
            </button>
          </div>
          <div className="download_report">
            <button onClick={generarPDF} title="Descargar Reporte">
              <span class="material-symbols-outlined">
                cloud_download
              </span>
            </button>
          </div>
        </div>
		
				<div style={{ marginTop: '1rem'}} className="noticias">

					<div className="guardado_noticias">
						<div className="status_noticias">
							<div className="info_noticias">
								<h3>{t('noticias.total_catalogos')}</h3>
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
								<h3>{t('noticias.total_ironSalida')}</h3>
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
								<h3>{t('noticias.total_ironLlegada')}</h3>
								<h1>11.000</h1>
							</div>
							<div className="progress">
								<svg>
									<circle cx='38' cy='38' r='36'></circle>
								</svg>
								<div className="porcentaje">
									<p>+20%</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Empleado del mes */}

				<div className="nuevos_empleados">

					<div className="lista_empleados">
						<h2>{t('noticias.empleados_del_mes')}</h2>
						<div className="empleado">
							<img
                src="https://media.istockphoto.com/id/1171169107/es/foto/retrato-de-joven-hombre-cauc%C3%A1sico-sonriente-con-los-brazos-cruzados-usando-reloj-inteligente-y.jpg?s=612x612&w=0&k=20&c=QQdny314cfuKaZX3HuqzAKKqVd5HIrWPZjdZvPAlCY8=" alt="empleado" />
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
					<table>
						<thead>
							<tr>
								<th>{t('noticias.nombre')}</th>
								<th>{t('noticias.fecha')}</th>
								<th>{t('noticias.estado')}</th>
								<th>{t('noticias.ubicacion')}</th>
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
						</tbody>
					</table>
					<Link to="/catalogo" className="btn">{t('noticias.ver_todo')}</Link>
				</div>
			</main>
			<MenuOpciones 
				handleMenuBar={handleMenuBar} 
			/> 
		</div>
	)
}
