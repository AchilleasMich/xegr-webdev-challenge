import { useState } from 'react';
import { createStandaloneToast } from '@chakra-ui/toast';

export const usePostProperty = () => {
  const { toast } = createStandaloneToast();
  const [loading, setLoading] = useState(false);

  const postProperty = async (values) => {
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
        toast({
          title: 'Property Added Successfuly',
          status: 'success',
          duration: 3000,
          isClosable: true
        });
      } else {
        toast({
          title: 'Failed to create property',
          status: 'error',
          duration: 3000,
          isClosable: true
        });
      }
    } catch (error) {
      toast({
        title: 'Failed to create property',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
    setLoading(false);
  };

  return {
    postProperty,
    loading
  };
};
