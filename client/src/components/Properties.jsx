import { Box, Heading, Center } from '@chakra-ui/react';
import { Error, Empty, Loading } from './Generic';
import { useFetchProperties } from '../hooks/useFetchProperties';
import PropertiesList from './Cards/PropertiesList';

const Properties = () => {
  const { data: properties, error, loading } = useFetchProperties();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Box>
      <Center>
        <Heading as="h2" size="md" h="6" mt={1} pt={4}>
          List of Properties
        </Heading>
      </Center>
      <div>{properties.length > 0 ? <PropertiesList properties={properties} /> : <Empty />}</div>
    </Box>
  );
};

export default Properties;
