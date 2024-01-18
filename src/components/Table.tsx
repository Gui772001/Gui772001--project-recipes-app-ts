import { useContext } from 'react';
import Form from './Form';
import UserContext from '../Context/UserContext';

function Table() {
  const { filtrar, busca } = useContext(UserContext);
  const filtroname = filtrar.filter((nome) => {
    if (busca.busca.length > 0) {
      return nome.name.includes(busca.busca);
    }
    return nome;
  });

  return (
    <>
      <Form />
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
          {filtroname.map((planeta, index) => (
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
