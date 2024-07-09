import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"

export const User = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Usuarios</h1>
      </main>
      <MenuOpciones />
    </div>
  )
}