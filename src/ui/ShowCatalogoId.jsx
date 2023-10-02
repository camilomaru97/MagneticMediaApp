import '../styles/ui/showcatalogo.css'

export const ShowCatalogoId = ({ handleInfoModal }) => {

  return (
    <div className="info_modal">
      <h1>Informacion Catalogo</h1>
      <span
        onClick={() => handleInfoModal()}
        className="material-symbols-outlined close"
      >
        close
      </span>
      <section className='info_modal_box'>
        <p>Ciclo: &nbsp; <span> Mensual </span></p>
        <p>Consola: &nbsp; <span> Suba </span></p>
        <p>Programa: &nbsp; <span> Dataprotector </span></p>
        <p>Tecnologia: &nbsp; <span> LT06 </span></p>
        <p>Numero Ip: &nbsp; <span> 123.145.121.567 </span></p>
        <p>Nombre Usuario: &nbsp; <span> Camilo </span></p>
        <p>Nombre Servidor: &nbsp; <span> servidor202934167 </span></p>
        <p>Nombre Catalogo: &nbsp; <span> ABCD12312AADVF1231 </span></p>
        <p>Fecha de creación: &nbsp; <span> 01/10/2023 03:02:44 pm </span></p>
      </section>
    </div>
  );
};
