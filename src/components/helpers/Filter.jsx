import '../../styles/components/helpers/filter.css';

export const Filter = ({ setInputSearch, inputSearch }) => {

  const handleInputChange = ({ target }) => {
    setInputSearch(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="filter_form">
      <label className="date">Fecha de inicio:</label>
      <input type="date" />

      <label className="date">Fecha de fin:</label>
      <input type="date" />

      <label className="buscar">Buscar:</label>
      <input
        type="text"
        value={inputSearch}
        name="inputSearch"
        onChange={handleInputChange}
      />
    </form>
  );
};
