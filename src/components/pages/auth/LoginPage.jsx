import { useState } from "react"
import { postUser } from "../../../actions/userActions"
import { useDispatch } from "react-redux"


export const LoginPage = () => {
  
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(postUser(user))
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
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
      <button 
        type="submit">Ingresar
      </button>
    </form>

  )
}