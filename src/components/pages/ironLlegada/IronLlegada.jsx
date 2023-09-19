import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"

export const IronLlegada = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Iron Llegada</h1>
      </main>
      <MenuOpciones />
    </div>
  )
}