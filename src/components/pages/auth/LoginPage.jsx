import { useEffect, useState } from 'react';
import imgBackground from '../../../assets/fondo.jpg';
import '../../../styles/components/auth.css';
import { postUser } from '../../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

export const LoginPage = () => {
	const dispatch = useDispatch();
	const errorAuth = useSelector((state) => state.user.error);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [msgError, setMsgError] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		if (errorAuth) {
			setError(true);
			setMsgError(errorAuth);
			setTimeout(() => {
				setError(false);
			}, 5000);
		}
	}, [errorAuth]);

  const ClientID =  '961772786532-vkmgft3m6917rs2kkonfb0tcjq7a153e.apps.googleusercontent.com'

  useEffect(() => {
    const start = () => {
        gapi.auth2.init({
          client_id: ClientID
        })
    }
    gapi.load('client:auth2', start)
  },[])
  
  const onSuccessLogin = (response) => {
    const user = {
      email: response.profileObj.email,
      password: `${response.profileObj.googleId}`,
    }
    dispatch(postUser(user));
  }

  const onFailureLogin = (response) => {
    console.log('something went wrong')
  }

	const validateAndDispatch = (isValid, errorMsg) => {
		setError(isValid);
		setMsgError(errorMsg);
		setTimeout(() => setError(false), 4000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.trim() === '' || password.trim() === '') {
			validateAndDispatch(true, 'Todos los campos son obligatorios');
			return;
		}

		if (!validator.isEmail(email)) {
			validateAndDispatch(true, 'El email no es valido');
			return;
		}

		if (password.length < 6) {
			validateAndDispatch(true, 'La contraseña debe tener al menos 6 caracteres');
			return;
		}
		const user = {
			email,
			password,
		};
		dispatch(postUser(user));
		setEmail('');
		setPassword('');

	};

	return (
		<section className="container_auth">
			<main>
				<div className="logo_auth">
					<img
						style={{ marginLeft: '1.5rem' }}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Banco_Caja_Social_logo.svg/2560px-Banco_Caja_Social_logo.svg.png"
						alt="logo"
					/>
				</div>
				<h1
					className="h1"
					style={{
						marginLeft: '2.5rem',
						marginBottom: '-1rem',
						fontSize: '1.9rem',
					}}
				>
					{' '}
					Bienvenido de Nuevo!
				</h1>
				<p
					className="p"
					style={{ textAlign: 'start', marginLeft: '1rem', fontSize: '1rem' }}
				>
					Ingresa tus datos para continuar
				</p>
				<form className="auth_form" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button style={{ marginBottom: '1rem'}} type="submit">Ingresar</button>
          <GoogleLogin 
            className='googleLogin'
            clientId={ClientID}
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={'single_host_origin'}
          />
				</form>
				<Link to="/auth/register">
					<p
						style={{ textAlign: 'start', marginLeft: '1rem', fontSize: '1rem' }}
					>
						No tienes cuenta?{' '}
						<span style={{ color: '#03a9f0' }}>Crea tu cuenta</span>
					</p>
				</Link>
				{error && (
					<h4

						style={{ fontWeight: '400', fontSize: '1rem', width: '84%', textAlign: 'center' }}
						className="errorLogin"
					>
						{msgError}
					</h4>
				)}
			</main>
			<div className="img_section">
				<img src={imgBackground} alt="login-img" />
			</div>
			
		</section>
	);
};


