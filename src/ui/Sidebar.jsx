import { Link } from "react-router-dom"
import '../styles/ui/sidebar.css'

export const Sidebar = () => {
    return (
        <>
            <main>
                <aside>
                    <div className="toggle">
                        <div className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Banco_Caja_Social_logo.svg/2560px-Banco_Caja_Social_logo.svg.png" alt="logo" />
                
                        </div>
                        <div className='close'>
                            <span className="material-symbols-outlined"> close </span>
                        </div> 
                    </div>
                    <div className="sidebar">
                        <Link to='/catalogo' className='link'>
                            <span className="material-symbols-outlined"> dashboard </span>
                            <h3>Dashboard</h3>
                        </Link>
                        <Link to='/catalogo' className='link active'>
                            <span className="material-symbols-outlined"> person_outline </span>
                            <h3>Users</h3>
                        </Link>
                        <Link to='/catalogo' className='link'>
                            <span className="material-symbols-outlined"> receipt_long </span>
                            <h3>History</h3>
                        </Link>
                        <Link to='/catalogo' className='link'>
                            <span className="material-symbols-outlined"> insights </span>
                            <h3>Analytics</h3>
                        </Link>
                        <Link to='/catalogo' className='link'>
                            <span className="material-symbols-outlined"> inventory </span>
                            <h3>Sales</h3>
                        </Link>
                        <Link to='/catalogo' className='link'>
                            <span className="material-symbols-outlined"> report </span>
                            <h3>Reportes</h3>
                        </Link>
                        <Link to='/catalogo' className='link'>
                            <span className="material-symbols-outlined"> logout </span>
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </aside>
            </main>
        </>
      )
}