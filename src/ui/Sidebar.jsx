import { Link } from "react-router-dom"
import '../styles/ui/sidebar.css'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ activeBar, handleMenuBar }) => {

    return (
        <>
            <main>
                <aside className={ activeBar ? 'activeBar' : 'desactiveBar' }>
                    <div className="toggle">
                        <div className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Banco_Caja_Social_logo.svg/2560px-Banco_Caja_Social_logo.svg.png" alt="logo" />
                
                        </div>
                        <div className='close'>
                            <span 
                            onClick={() => handleMenuBar()}
                            className="material-symbols-outlined"> close </span>
                        </div> 
                    </div>
                    <div className="sidebar">
                        <Link to='/noticias' className='link '>
                            <span className="material-symbols-outlined"> dashboard </span>
                            <h3>Dashboard</h3>
                        </Link>
                        <Link to='/catalogo' className='link active'>
                            <span className="material-symbols-outlined"> ballot </span>
                            <h3>Catalogo</h3>
                        </Link>
                        <Link to='/ironllegada' className='link'>
                            <span className="material-symbols-outlined"> circles_ext </span>
                            <h3>Iron Llegada</h3>
                        </Link>
                        <Link to='/ironsalida' className='link'>
                            <span className="material-symbols-outlined"> pip_exit </span>
                            <h3>Iron Salida</h3>
                        </Link>
                        <Link to='/usuarios' className='link'>
                            <span className="material-symbols-outlined"> person_outline </span>
                            <h3>Usuarios</h3>
                        </Link>
                        <Link to='/analitica' className='link'>
                            <span className="material-symbols-outlined"> insights </span>
                            <h3>Analiticas</h3>
                        </Link>
                        <Link to='/ventas' className='link'>
                            <span className="material-symbols-outlined"> inventory </span>
                            <h3>Ventas</h3>
                        </Link>
                        <Link to='/auth' className='link'>
                            <span className="material-symbols-outlined"> logout </span>
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </aside>
            </main>
        </>
      )
}