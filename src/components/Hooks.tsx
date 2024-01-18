import { useEffect, useState } from 'react';
import { getCategories } from '../api';

function useFetch() {
  const [Api, setapi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setapi(categoriesData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);

  return { Api };
}
export default useFetch;
