import React, { useEffect, useState } from 'react';
import { List, ListItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { formatAreaField } from '../../../utils/form';
import { useKeyPress } from '../../../hooks/useKeyPress';

// Dropdown box listing all the available places
// Only viable in the context of AreaAutoCompleteFormControl
const AreaAutoCompleteDropdown = ({ handleDropdownSelection, places, onClose }) => {

  const arrowUpPressed = useKeyPress('ArrowUp')
  const arrowDownPressed = useKeyPress('ArrowDown')
  const escapePressed = useKeyPress('Escape')
  const enterPressed = useKeyPress('Enter')
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (selected > places.length) {
      setSelected(0)
    }
    if (arrowUpPressed && selected !==0) {
      setSelected(selected => selected - 1)
    }
    if (arrowDownPressed && selected < places.length - 1) {
      setSelected(selected => selected + 1)
    }
    if (enterPressed) {
      handleDropdownSelection(places[selected])
      onClose()
    }
    if (escapePressed) {
      onClose()
    }
  }, [arrowUpPressed, arrowDownPressed, enterPressed, escapePressed, places]);

  return (
    <List
      id="places-container"
      data-testid="places-container"
      display="flex"
      flexDir="column"
      bg="gray.200"
      position="absolute"
      zIndex="docked"
      w="full"
      mt={1}
      borderRadius="md"
      maxH="96"
      overflowY="auto"
      tabIndex={selected}
    >
      {places.map((place, idx) => {
        const formattedAreaText = formatAreaField(place);
        return (
          <ListItem
            key={place.placeId}
            h="10"
            px={2}
            py={2}
            onMouseDown={() => handleDropdownSelection(place)}
            color={idx === selected ? 'teal' : 'black'}
            bg={idx === selected ? 'gray.100' : 'gray.200'}
            _hover={{ bg: 'gray.100', cursor: 'pointer' }}
          >
            {formattedAreaText}
          </ListItem>
        );
      })}
    </List>
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
  ),
  onClose: PropTypes.func
};

export default AreaAutoCompleteDropdown;
