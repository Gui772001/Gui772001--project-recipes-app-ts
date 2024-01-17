import { useEffect, useState } from 'react';
import { getCategories } from '../api';

function useFetch() {
  const [data, setData] = useState([]);
  const [busca, setbusca] = useState({
    busca: '',
  });
  const fetchData = async () => {
    try {
      const categoriesData = await getCategories();
      if (busca.busca.length >= 1) {
        const filtro = categoriesData.results.filter((filtando) => {
          return filtando.name.includes(busca.busca);
        });
        console.log(filtro);
        setData(filtro);
      } else {
        setData(categoriesData.results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [busca]);
  return {
    data,
    busca,
    setbusca,
    fetchData,
  };
}
export default useFetch;
