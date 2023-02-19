import { Box, Center, Heading, Text, Stack } from '@chakra-ui/react';
import { useFetchProperties } from '../hooks/useFetchProperties';
import PropertiesList from './Cards/PropertiesList';

const Properties = () => {
  const { data: properties, error, loading } = useFetchProperties();

  if (loading) {
    return (
      <Box>
        <Center mt="32">
          <Heading>Loading...</Heading>
        </Center>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Stack mt="32">
          <Heading>Something went wrong...</Heading>
          <Text>Please refresh the page</Text>
        </Stack>
      </Box>
    );
  }

  return (
    <Box>
      <Center>
        <Heading as="h2" size="md" h="6" mt={1} pt={4}>
          List of Properties
        </Heading>
      </Center>
      <div>
        <PropertiesList properties={properties} />
      </div>
    </Box>
  );
};

export default Properties;
