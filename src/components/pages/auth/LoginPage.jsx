export const LoginPage = () => {

  const saludo = 'Hola mundo'

  return (
    <form>
      <h3>{saludo}</h3>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Ingresar</button>
    </form>

  )
}