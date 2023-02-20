import { FormControl, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './helpers/InputFieldInformation';

const NumberInputFormControl = ({ field, error }) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{field.label}</FormLabel>
      <NumberInput>
        <NumberInputField {...field.input} />
      </NumberInput>
      <InputFieldInformation error={error} info={field.infoText} />
    </FormControl>
  );
};

NumberInputFormControl.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.object,
    infoText: PropTypes.string
  }),
  error: PropTypes.string
};

export default NumberInputFormControl;
