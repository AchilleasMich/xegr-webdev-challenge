import { useEffect, useState } from 'react';
import { FETCH_PLACES_URL } from '../constants';

export const useFetchPlaces = (place) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPlaces = async () => {
    if (place.placeId) {
      return;
    }
    if (place.mainText.length < 3) {
      setData([]);
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${FETCH_PLACES_URL}?input=${place.mainText}`, {
        cache: 'force-cache'
      });
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
      fetchPlaces();
    }, 200);
    return () => clearTimeout(handler);
  }, [place]);

  return {
    data,
    loading,
    error
  };
};
