import { useState } from 'react';
import UserContext from './UserContext';
import useFetch from '../components/Hooks';

function UserProvider({ children }) {
  const [rende, setrender] = useState([]);
  const [busca, setbusca] = useState({
    busca: '',
    coluna: 'population',
    valor: 'maior que',
    numerico: '0',
  });
  const { Api } = useFetch();
  const filtrar = Api.filter((nome) => {
    return (
      rende.every((re) => {
        if (re.valor === 'maior que') {
          return +re.numerico < +nome[re.coluna];
        }
        if (re.valor === 'menor que') {
          return +re.numerico > +nome[re.coluna];
        }
        if (re.valor === 'igual a') {
          return +re.numerico === +nome[re.coluna];
        }
        return nome;
      })

    );
  });
  return (
    <UserContext.Provider value={ { Api, filtrar, rende, setrender, busca, setbusca } }>
      { children }
    </UserContext.Provider>

  );
}
export default UserProvider;
