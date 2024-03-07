import { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';

function Form() {
  const { setrender, rende, setbusca, busca, filtrar } = useContext(UserContext);
  const [form, setform] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

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
    setrender([
      ...rende,
      busca]);
    const filteredForm = form.filter((formItem) => busca.coluna !== formItem);
    setform(filteredForm);
    setbusca({
      busca: '',
      coluna: filteredForm[0],
      valor: 'maior que',
      numerico: '0',
    });
  }
  const removerIte = (index: number) => {
    const novaLista = [...rende];
    filtrar.filter((voltando) => {
      return voltando !== novaLista;
    });
    setform([...form, novaLista[0].coluna]);
    novaLista.splice(index, 1);
    setrender(novaLista);
  };
  const Removeallfiltros = () => {
    setrender([]);
    setform(['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water']);
  };
  return (
    <>
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
        <label htmlFor="columnFilter">population</label>
        <select
          data-testid="column-filter"
          name="coluna"
          onChange={ handleChange }
        >
          {form.map((opcoes) => (
            <option key={ opcoes } value={ opcoes }>
              {opcoes}
            </option>
          ))}

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
      {rende.length !== 0 && (
        rende.map((arr, index) => (
          <div key={ index } data-testid="filter">
            <p>
              {arr.coluna}
            </p>
            <p>
              {arr.valor}
            </p>
            <p>
              {arr.numerico}
            </p>
            <button
              onClick={ () => removerIte(index) }
            >
              Excluir

            </button>
          </div>
        ))) }
      <button
        data-testid="button-remove-filters"
        onClick={ Removeallfiltros }
      >
        Remover todas filtragens
      </button>

    </>
  );
}
export default Form;
