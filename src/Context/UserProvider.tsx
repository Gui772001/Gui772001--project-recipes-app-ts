import { useState } from 'react';
import UserContext from './UserContext';
import useFetch from '../components/Hooks';

function UserProvider({ children }) {
  const [botao, setbotao] = useState(false);
  const [busca, setbusca] = useState({
    busca: '',
    coluna: 'population',
    valor: 'maior que',
    numerico: '0',
  });
  const [busca2, setbusca2] = useState([
  ]);
  const { Api } = useFetch();
  const filtrar = Api.filter((nome) => {
    // if (busca.valor === 'maior que') {
    //   console.log('fff')
    //   return +busca.numerico > nome[busca.coluna];
    // }
    if (busca.valor === 'menor que') {
      return +busca.numerico < +nome[busca.coluna];
    }
    if (busca.valor === 'igual a') {
      return +busca.numerico === +nome[busca.coluna];
    }
    if (busca.busca.length > 0) {
      return nome.name.includes(busca.busca);
    }
    return Api;
  });
  return (
    <UserContext.Provider value={ { Api, filtrar, setbusca, busca, setbotao, botao } }>
      { children }
    </UserContext.Provider>

  );
}
export default UserProvider;
