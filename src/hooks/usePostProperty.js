import { useState } from 'react';

export const usePostProperty = () => {
  const [sucess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const postProperty = async (values) => {
    setError('');
    setSuccess(false);
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3456/property`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (response.created) {
        setSuccess(true);
      } else {
        setError('Failed to post property');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('some error', error);
      setError('something went wrong');
    }
    setLoading(false);
  };

  return {
    postProperty,
    sucess,
    loading,
    error
  };
};
