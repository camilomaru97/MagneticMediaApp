import { useState } from 'react';
import { useSelector } from 'react-redux';

export const Paginador = () => {
  const catalogos = useSelector((state) => state?.catalogo.catalogos);

  const longitud = catalogos.length;
const [page, setPage] = useState(1);
  const validCantidad = longitud < page * 7 ? longitud : page * 7;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
        justifyContent: 'end',
      }}
    >
      <span style={{ cursor: 'pointer', marginRight: '-1.5rem' }} onClick={() => setPage(page - 1)} class="material-symbols-outlined">
        navigate_before
      </span>
      <p style={{ textAlign: 'center', width: '120px', marginTop: '.1rem'}}>{`${page} - ${validCantidad} de ${longitud}`}</p>
      <span style={{ cursor: 'pointer', marginLeft: '-1.5rem' }} onClick={() => setPage(page + 1)} class="material-symbols-outlined">
        navigate_next
      </span>
    </div>
  );
};
