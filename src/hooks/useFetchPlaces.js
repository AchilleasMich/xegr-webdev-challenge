import { useEffect, useState } from 'react';

export const useFetchPlaces = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPlaces = async (place) => {
    if (place.length < 3) {
      setData([]);
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3456/places?input=${place}`);
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
    const handler = setTimeout(() => {
      fetchPlaces(query);
    }, 250);
    return () => clearTimeout(handler);
  }, [query]);

  return {
    data,
    loading,
    error
  };
};
