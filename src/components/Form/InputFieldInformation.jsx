import { FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputFieldInformation = ({ error, message }) => {
  if (error) {
    return <FormErrorMessage mt={0.5}>{message}</FormErrorMessage>;
  }
  return <FormHelperText mt={0.5}>{message}</FormHelperText>;
};

InputFieldInformation.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string
};

export default InputFieldInformation;
