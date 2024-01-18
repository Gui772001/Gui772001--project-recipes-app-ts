import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Form() {
  const { setrender, rende, setbusca, busca } = useContext(UserContext);
  const handleChange = (

    event :React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = event.target;
    setbusca({
      ...busca,
      [name]: value,
    });
  };
  function submit() {
    setrender({
      ...rende,
      ...busca,
    });
  }
  return (
    <form>
      <label data-testid="name-filter">
        <input
          type="text"
          name="busca"
          data-testid="checkout-fullname"
          placeholder="Busca"
          value={ busca.busca }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="columnFilter">Escolha uma coluna:</label>
      <select
        data-testid="column-filter"
        name="coluna"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="valor"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="numerico"
        data-testid="value-filter"
        onChange={ handleChange }
        value={ busca.numerico }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ submit }
      >
        Filtrar
      </button>
    </form>
  );
}
export default Form;
