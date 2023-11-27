
import { useSelector } from 'react-redux'
import '../styles/ui/menuopciones.css'
import { useTranslation } from 'react-i18next'

export const MenuOpciones = ({ handleMenuBar }) => {

  const [t, i18n] = useTranslation('global')
  const name = useSelector(state => state.user.user)

  let nameFormat;
  if(name.split(' ').length > 1) {
    nameFormat = `${name.split(' ')[0]} ${name.split(' ')[2]}`
  }

  return (
    <div className="menu_opciones">
      <div className="nav">
        <button>
          <span
            onClick={() => handleMenuBar()}
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
            <p><b>{ name.split(' ').length > 2 ? nameFormat : name}</b></p>
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
          <p>Cintoteca Bogota</p>
        </div>
      </div>

      <div className="recordatorios">
        <div className="header">
          <h2>{t('noticias.recordatorios')}</h2>
          <span className="material-symbols-outlined">
            notifications_none
          </span>
        </div>
      </div>
    </div>
  )
}