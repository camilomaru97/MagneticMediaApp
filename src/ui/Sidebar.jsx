import { Link, useLocation } from "react-router-dom"
import '../styles/ui/sidebar.css'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ activeBar, handleMenuBar }) => {

	let path = useLocation().pathname
	const linksObjectsArray = [
		{ to: '/noticias', icon: 'dashboard', text: 'Noticias' },
		{ to: '/catalogo', icon: 'ballot', text: 'Catalogo' },
		{ to: '/ironllegada', icon: 'circles_ext', text: 'Llegada' },
		{ to: '/ironsalida', icon: 'pip_exit', text: 'Salida' },
		{ to: '/usuarios', icon: 'person_outline', text: 'Usuarios' },
		{ to: '/analitica', icon: 'insights', text: 'Analiticas' },
		{ to: '/ventas', icon: 'inventory', text: 'Ventas' },
		{ to: '/auth', icon: 'logout', text: 'Logout' },
	]

	return (
		<>
			<main>
				<aside className={activeBar ? 'activeBar' : 'desactiveBar'}>
					<div className="toggle">
						<div className="logo">
							<img 
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Banco_Caja_Social_logo.svg/2560px-Banco_Caja_Social_logo.svg.png" 
								alt="logo" 
							/>
						</div>
						<div className='close'>
							<span
								onClick={() => handleMenuBar()}
								className="material-symbols-outlined"
							>
								close 
							</span>
						</div>
					</div>
					<div className="sidebar">
						{
							linksObjectsArray.map(link => {
								return (
									<Link
										key={link.to}
										to={link.to}
										className={`link ${path === link.to ? 'active' : ''}`}
									>
										<span className="material-symbols-outlined">{link.icon}</span>
										<h3>{link.text}</h3>
									</Link>
								)
							})
						}
					</div>
				</aside>
			</main>
		</>
	)
}