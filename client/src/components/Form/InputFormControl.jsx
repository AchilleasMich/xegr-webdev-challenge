import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './helpers/InputFieldInformation';

const InputFormControl = ({ field, error }) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{field.label}</FormLabel>
      <Input {...field.input} />
      <InputFieldInformation error={error} info={field.infoText} />
    </FormControl>
  );
};

InputFormControl.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.object,
    infoText: PropTypes.string
  }),
  error: PropTypes.string
};

export default InputFormControl;
