import { useEffect, useState } from 'react';

export const useFetchProperties = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProperties = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await fetch(`http://192.168.1.46:3456/properties`);
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
