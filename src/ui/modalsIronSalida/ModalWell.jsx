import React from "react";

export const ModalWell = ({ isOpen, handleIsOpen, children }) => {
  // Esta función cierra el modal si se hace clic en el fondo oscuro
  const handleCloseClick = (e) => {
    if (e.target.id === "modal-overlay") {
      handleIsOpen(false);
    }
  };

  // Este condicional impide que el modal se renderice si isOpen es false
  if (!isOpen) {
    return null;
  }

  return (
    <div id="modal-overlay" onClick={handleCloseClick} style={overlayStyles}>
      <div style={modalStyles}>
        <button
          onClick={() => handleIsOpen(false)}
          style={{ color: "red", cursor: "pointer" }}
        >
          X
        </button>
        {children}
        {/* Botón para cerrar el modal */}
      </div>
    </div>
  );
};

// Estilos para el fondo oscuro
const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

// Estilos para la ventana del modal
const modalStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  zIndex: 1001,
};
