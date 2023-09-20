import '../styles/ui/addmodal.css'

export const AddModal = ({ handleAddModal }) => {

    return (
        <div className="add_modal">
            <h1>Añadir Catalogo</h1>
            <span 
                onClick={() => handleAddModal()} 
                className="material-symbols-outlined close"
            >
                close
            </span>
        </div>
    )
}