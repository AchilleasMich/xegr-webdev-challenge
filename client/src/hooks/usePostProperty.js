import { useState } from 'react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { POST_PROPERTY_URL, errorMessages, infoMessage } from '../constants';

export const usePostProperty = () => {
  const { toast } = createStandaloneToast();
  const [loading, setLoading] = useState(false);

  const postProperty = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(POST_PROPERTY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        toast({
          title: infoMessage.PROPERTY_ADDED,
          status: 'success',
          duration: 3000,
          isClosable: true
        });
      } else {
        toast({
          title: errorMessages.FAIL_CREATE_PROPERTY,
          status: 'error',
          duration: 3000,
          isClosable: true
        });
      }
    } catch (error) {
      toast({
        title: errorMessages.FAIL_CREATE_PROPERTY,
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
