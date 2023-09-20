import '../styles/ui/editmodal.css'

export const EditModal = ({ handleEditModal }) => {
    return (
        <div className="edit_modal">
            <h1>Editar Modal</h1>
            <span
                onClick={() => handleEditModal()}
                className="material-symbols-outlined close"
            >
                close
            </span>
        </div>
    )
}