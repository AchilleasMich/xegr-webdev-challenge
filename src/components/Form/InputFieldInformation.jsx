import { FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// This component works only as child of the FormControl component
// In order for the message to appear, isInvalid must passed also as
// true to the FormControl component
const InputFieldInformation = ({ isInvalid, message }) => {
  if (isInvalid) {
    return (
      <FormErrorMessage mt={0.5} data-testid="inputFieldInformation-invalid">
        {message}
      </FormErrorMessage>
    );
  }
  return (
    <FormHelperText mt={0.5} data-testid="inputFieldInformation-info">
      {message}
    </FormHelperText>
  );
};

InputFieldInformation.propTypes = {
  isInvalid: PropTypes.bool,
  message: PropTypes.string
};

export default InputFieldInformation;
