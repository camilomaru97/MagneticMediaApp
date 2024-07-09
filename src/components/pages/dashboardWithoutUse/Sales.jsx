import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"

export const Sales = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Ventas</h1>
      </main>
      <MenuOpciones />
    </div>
  )
}