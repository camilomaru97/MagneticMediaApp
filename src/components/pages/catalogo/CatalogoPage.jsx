import { MenuOpciones } from "../../../ui/MenuOpciones"
import { Sidebar } from "../../../ui/Sidebar"

export const CatalogoPage = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <h1>Catalogo</h1>
      </main>
      <MenuOpciones />
    </div>
  )
}