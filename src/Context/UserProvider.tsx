import { useState } from 'react';
import UserContext from './UserContext';
import useFetch from '../components/Hooks';

function UserProvider({ children }) {
  const [rende, setrender] = useState({
    busca: '',
    coluna: '',
    valor: '',
    numerico: '0',
  });
  const [busca, setbusca] = useState({
    busca: '',
    coluna: 'population',
    valor: 'maior que',
    numerico: '0',
  });
  const { Api } = useFetch();
  const filtrar = Api.filter((nome) => {
    if (rende.valor === 'maior que') {
      return +rende.numerico < +nome[rende.coluna];
    }
    if (rende.valor === 'menor que') {
      return +rende.numerico > +nome[rende.coluna];
    }
    if (rende.valor === 'igual a') {
      return +rende.numerico === +nome[rende.coluna];
    }
    return Api;
  });
  return (
    <UserContext.Provider value={ { Api, filtrar, rende, setrender, busca, setbusca } }>
      { children }
    </UserContext.Provider>

  );
}
export default UserProvider;
