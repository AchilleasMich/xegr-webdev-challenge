import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './helpers/InputFieldInformation';

const SelectInputFormControl = ({ field, error, options = [] }) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{field.label}</FormLabel>
      <Select {...field.input}>
        {options.map((option) => {
          return (
            <option key={option} value={option} data-testid={`optionid-${option}`}>
              {option}
            </option>
          );
        })}
      </Select>
      <InputFieldInformation error={error} info={field.infoText} />
    </FormControl>
  );
};

SelectInputFormControl.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.object,
    infoText: PropTypes.string
  }),
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
};

export default SelectInputFormControl;
