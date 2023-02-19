import { useState } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './helpers/InputFieldInformation';
import AreaAutoCompleteDropdown from './helpers/AreaAutoCompleteDropdown';

const AreaAutoCompleteFormControl = ({ area, error, places }) => {
  const [triggerDropdown, setTriggerDropdown] = useState(false);

  let value = area.control.value.mainText;
  if (area.control.value.secondaryText) {
    value = `${value} - ${area.control.value.secondaryText}`;
  }

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
  };

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{area.label}</FormLabel>
      <Input
        {...area.input}
        value={value}
        onChange={handleOnChange}
        autoComplete="off"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {triggerDropdown && places.length > 0 && (
        <AreaAutoCompleteDropdown
          places={places}
          handleDropdownSelection={handleDropdownSelection}
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
  )
};

export default AreaAutoCompleteFormControl;
