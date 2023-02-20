import { FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// This component works only as child of the FormControl component
// In order for the message to appear, isInvalid must passed also as
// true to the FormControl component
const InputFieldInformation = ({ error, info }) => {
  if (error) {
    return (
      <FormErrorMessage mt={0.5} data-testid="inputFieldInformation-invalid">
        {error}
      </FormErrorMessage>
    );
  }
  return (
    <FormHelperText mt={0.5} data-testid="inputFieldInformation-info">
      {info}
    </FormHelperText>
  );
};

InputFieldInformation.propTypes = {
  error: PropTypes.string,
  info: PropTypes.string
};

export default InputFieldInformation;
