import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import PropertyCard from './PropertyCard';

const PropertiesList = ({ properties }) => {
  return (
    <Box
      spacing={2}
      mt={4}
      display="flex"
      flexWrap="wrap"
      gap={10}
      maxH={'100%'}
      overflowY={'auto'}
      justifyContent="center"
      py={4}
    >
      {properties.map((p) => {
        return <PropertyCard key={p.id} property={p} />;
      })}
    </Box>
  );
};

PropertiesList.propTypes = {
  properties: PropTypes.array
};

export default PropertiesList;
