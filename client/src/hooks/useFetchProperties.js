import { useEffect, useState } from 'react';
import { FETCH_PROPERTIES_URL } from '../constants';

export const useFetchProperties = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProperties = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await fetch(FETCH_PROPERTIES_URL);
      if (response.ok) {
        const places = await response.json();
        setData(places);
      } else {
        setError('Failed to fetch data');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('some error', error);
      setError('something went wrong');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return {
    data,
    loading,
    error
  };
};
