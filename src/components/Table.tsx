import useFetch from './Hooks';

function Table() {
  const { data, setbusca, busca } = useFetch();

  const handleChange = (
    event :React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = event.target;
    setbusca({
      ...busca,
      [name]: value,
    });
  };
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const categoriesData = await getCategories();
  //         categoriesData.results;
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };
  //     fetchData();
  //   }, [busca]);
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
      </form>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planeta, index) => (
            <tr key={ index }>
              <td>{planeta.name}</td>
              <td>{planeta.rotation_period}</td>
              <td>{planeta.orbital_period}</td>
              <td>{planeta.diameter}</td>
              <td>{planeta.climate}</td>
              <td>{planeta.gravity}</td>
              <td>{planeta.terrain}</td>
              <td>{planeta.surface_water}</td>
              <td>{planeta.population}</td>
              <td>{planeta.films}</td>
              <td>{planeta.created}</td>
              <td>{planeta.edited}</td>
              <td>{planeta.url}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Table;
