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
      const response = await fetch(`http://192.168.1.46:3456/property`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Failed to post property');
      }
    } catch (error) {
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
