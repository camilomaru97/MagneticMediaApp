import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"

export const IronSalida = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Iron Salida</h1>
      </main>
      <MenuOpciones />
    </div>
  )
}