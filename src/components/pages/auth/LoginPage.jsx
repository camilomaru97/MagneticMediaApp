import { useState } from 'react';
import imgBackground from '../../../assets/fondo.jpg';
import '../../../styles/components/auth.css';
import { postUser } from '../../../actions/userActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(postUser(user));
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
          <button type="submit">Ingresar</button>
        </form>
        <Link to="/auth/register">
          <p
            style={{ textAlign: 'start', marginLeft: '1rem', fontSize: '1rem' }}
          >
            No tienes cuenta?{' '}
            <span style={{ color: '#03a9f0' }}>Crea tu cuenta</span>
          </p>
        </Link>
      </main>
      <div className="img_section">
        <img src={imgBackground} alt="login" />
      </div>
    </section>
  );
};
