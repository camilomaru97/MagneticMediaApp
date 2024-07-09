import imgBackground from '../../../assets/fondo.jpg';
import '../../../styles/components/register.css';
import { postNewUser } from '../../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const errorAuth = useSelector((state) => state.user.error);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState('');
  const [error, setError] = useState(false);

  const validateAndDispatch = (isValid, errorMsg) => {
    setError(isValid);
    setMsgError(errorMsg);
    setTimeout(() => setError(false), 4000);
  };

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
    console.log(response)
    const newUser =  {
      name: response.profileObj.name,
      email: response.profileObj.email,
      password: `${response.profileObj.googleId}`,
    } 
    console.log(newUser)
    dispatch(postNewUser(newUser));
    Swal.fire({
      icon: 'success',
      title: 'Acabamos de enviarte un correo de confirmacion, revisalo!',
      showConfirmButton: false,
      timer: 6000,
    });
  }

  const onFailureLogin = (response) => {
    console.log('something went wrong')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '' || user.trim() === '') {
      validateAndDispatch(true, 'Todos los campos son obligatorios');
      return;
    }
    if (user.length < 6) {
      validateAndDispatch(true, 'El usuario debe tener al menos 6 caracteres');
      return;
    }
    if (!validator.isEmail(email)) {
      validateAndDispatch(true, 'El email no es valido');
      return;
    }
    if (password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])/) === null) {
      validateAndDispatch(
        true,
        'La contraseña debe tener al menos 1 letra mayuscula, 1 numero y 1 caracter especial'
      );
      return;
    }
    const newUser = {
      name: user,
      email,
      password,
    };
    dispatch(postNewUser(newUser));
    setUser('');
    setEmail('');
    setPassword('');
    Swal.fire({
      icon: 'success',
      title: 'Acabamos de enviarte un correo de confirmacion, revisalo!',
      showConfirmButton: false,
      timer: 6000,
    });
  };

  return (
    <section className="container_register">
      <main>
        <div className="logo_register">
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
          Crea tu cuenta!
        </h1>
        <p
          className="p"
          style={{ textAlign: 'start', marginLeft: '1rem', fontSize: '1rem' }}
        >
          Ingresa tus datos para continuar
        </p>
        <form className="register_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
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
          <button style={{ marginBottom: '1rem'}} type="submit">Crear Nueva Cuenta</button>
          <GoogleLogin 
            className='googleLogin'
            clientId={ClientID}
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={'single_host_origin'}
          />
        </form>
        <Link to="/auth">
          <p
            style={{ textAlign: 'start', marginLeft: '1rem', fontSize: '1rem' }}
          >
            Ya tienes cuenta?{' '}
            <span style={{ color: '#03a9f0' }}>Iniciar sesion</span>
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
        <img src={imgBackground} alt="login" />
      </div>
    </section>
  );
};
