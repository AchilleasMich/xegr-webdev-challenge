/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Spinner,
  CloseButton
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './helpers/InputFieldInformation';
import AreaAutoCompleteDropdown from './helpers/AreaAutoCompleteDropdown';
import { formatAreaField } from '../../utils/form';

// Custom non generic component to handle area field which
// requires specific handling
const AreaAutoCompleteFormControl = ({ area, error, places, loading }) => {
  const [triggerDropdown, setTriggerDropdown] = useState(false);

  const formattedValue = formatAreaField(area.control.value);
  const handleOnChange = (e) => {
    area.control.setValue({
      placeId: '',
      secondaryText: '',
      mainText: e.target.value
    });
    setTriggerDropdown(true);
  };

  const handleDropdownSelection = (place) => {
    area.control.setValue({ ...place });
  };

  const handleOnFocus = () => {
    if (!area.control.value.placeId) {
      setTriggerDropdown(true);
    }
  };

  const handleOnBlur = () => {
    setTriggerDropdown(false);
    area.input.onBlur();
  };

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{area.label}</FormLabel>
      <InputGroup>
        <Input
          {...area.input}
          value={formattedValue}
          onChange={handleOnChange}
          autoComplete="off"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {loading && <InputRightElement children={<Spinner />} />}
        {!loading && triggerDropdown && places.length > 0 && (
          <InputRightElement children={<CloseButton onClick={() => setTriggerDropdown(false)} />} />
        )}
      </InputGroup>
      {triggerDropdown && places.length > 0 && (
        <AreaAutoCompleteDropdown
          places={places}
          handleDropdownSelection={handleDropdownSelection}
          onClose={() => setTriggerDropdown(false)}
        />
      )}
      <InputFieldInformation error={error} info={area.infoText} />
    </FormControl>
  );
};

AreaAutoCompleteFormControl.propTypes = {
  area: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.object,
    infoText: PropTypes.string,
    control: PropTypes.shape({
      value: PropTypes.shape({
        placeId: PropTypes.string,
        mainText: PropTypes.string,
        secondaryText: PropTypes.string
      }),
      setValue: PropTypes.func
    })
  }),
  error: PropTypes.string,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      placeId: PropTypes.string,
      mainText: PropTypes.string,
      secondaryText: PropTypes.string
    })
  ),
  loading: PropTypes.bool
};

export default AreaAutoCompleteFormControl;
