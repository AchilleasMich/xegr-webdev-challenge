import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './InputFieldInformation';

const AreaAutoCompleteControl = ({ area, error, places }) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{area.label}</FormLabel>
      <Input {...area.input} />
      {places.length > 0 && (
        <Box
          id="places-container"
          data-testid="places-container"
          display="flex"
          flexDir="column"
          bg="gray.100"
          position="absolute"
          zIndex="docked"
          w="full"
          mt={1}
          borderRadius="md"
          maxH="96"
          overflowY="auto"
        >
          {places.map((d) => {
            return (
              <Box
                key={d.placeId}
                h="10"
                px={2}
                py={2}
                _hover={{ bg: 'gray.200', cursor: 'pointer' }}
              >
                {d.mainText} - {d.secondaryText}
              </Box>
            );
          })}
        </Box>
      )}
      <InputFieldInformation error={error} info={area.infoText} />
    </FormControl>
  );
};

AreaAutoCompleteControl.propTypes = {
  area: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.object,
    infoText: PropTypes.string
  }),
  error: PropTypes.string,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeId: PropTypes.string,
      mainText: PropTypes.string,
      secondaryText: PropTypes.string
    })
  )
};

export default AreaAutoCompleteControl;
