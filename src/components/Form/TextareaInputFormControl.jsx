import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import InputFieldInformation from './helpers/InputFieldInformation';

const TextareaInputFormControl = ({ field, error }) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel mb={0}>{field.label}</FormLabel>
      <Textarea {...field.input} />
      <InputFieldInformation error={error} info={field.infoText} />
    </FormControl>
  );
};

TextareaInputFormControl.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string,
    input: PropTypes.object,
    infoText: PropTypes.string
  }),
  error: PropTypes.string
};

export default TextareaInputFormControl;
