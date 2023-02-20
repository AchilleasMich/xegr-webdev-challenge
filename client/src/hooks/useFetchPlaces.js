import { useEffect, useState } from 'react';
import { errorMessages, FETCH_PLACES_URL } from '../constants';

// Custom hook to handle all the aspects related to
// fetching the area suggestions. The request is debounced
// so it does not spam the api
// Input: the search parameter place
// Output: The data, loading and error information 
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
      const response = await fetch(`${FETCH_PLACES_URL}?input=${place.mainText}`);
      if (response.ok) {
        const places = await response.json();
        setData(places);
      } else {
        setError(errorMessages.FAIL_FETCH_PLACES);
      }
    } catch (error) {
      setError(errorMessages.GENERIC_ERROR);
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
