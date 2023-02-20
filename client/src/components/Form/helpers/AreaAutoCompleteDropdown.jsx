import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { formatAreaField } from '../../../utils/form';

// Dropdown box listing all the available places
// Only viable in the context of AreaAutoCompleteFormControl
const AreaAutoCompleteDropdown = ({ handleDropdownSelection, places }) => {
  return (
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
      {places.map((place) => {
        const formattedAreaText = formatAreaField(place);
        return (
          <Box
            key={place.placeId}
            h="10"
            px={2}
            py={2}
            _hover={{ bg: 'gray.200', cursor: 'pointer' }}
            onMouseDown={() => handleDropdownSelection(place)}
          >
            {formattedAreaText}
          </Box>
        );
      })}
    </Box>
  );
};

AreaAutoCompleteDropdown.propTypes = {
  handleDropdownSelection: PropTypes.func,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeId: PropTypes.string,
      mainText: PropTypes.string,
      secondaryText: PropTypes.string
    })
  )
};

export default AreaAutoCompleteDropdown;
