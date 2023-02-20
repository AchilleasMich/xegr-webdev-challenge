import { useState } from 'react';
import { infoMessage } from '../constants';
import { getFormValue, getFormValues } from '../utils/form';
import {
  areaValidation,
  priceValidation,
  titleValidation,
  typeValidation
} from '../utils/validations';

// Custom hook that is responsible for handling all the
// form logic.
// Includes form submision, validation, field definiton
// and error handling on the form
// Fields are defined and ready to be passed to the Input fields
// Special handling for the area field which is the only controlled
// field 
export const useXEForm = () => {
  // Area is a special input in XE form and
  // needs to be a controlled form field
  const [area, setArea] = useState({
    placeId: '',
    mainText: '',
    secondaryText: ''
  });

  const [errors, setErrors] = useState({});
  const validate = (form) => {
    const { title, type, price } = form;
    const errors = {
      title: titleValidation(title),
      area: areaValidation(area),
      type: typeValidation(type),
      price: priceValidation(price)
    };

    setErrors(errors);
    if (Object.keys(errors).some((k) => errors[k] !== '')) {
      return false;
    }
    return true;
  };

  const handleSubmit =
    (callback = () => {}) =>
    async (event) => {
      event.preventDefault();
      const form = getFormValues(event);
      form.area = area;

      if (validate(form)) {
        await callback(form);

        // The following command does not clear
        // the price field, probably an issue with
        // chakra ui NumberInputField.
        event.target.reset();
        setArea({
          placeId: '',
          mainText: '',
          secondaryText: ''
        });
      }
    };

  const fields = {
    title: {
      label: 'Title',
      input: {
        id: 'title',
        name: 'title',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Property Title'),
        onBlur: (e) => setErrors({ ...errors, title: titleValidation(getFormValue(e)) })
      },
      infoText: infoMessage.FIELD_REQUIRED
    },
    area: {
      label: 'Area',
      input: {
        id: 'area',
        name: 'area',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Property Area'),
        onBlur: () => setErrors({ ...errors, area: areaValidation(area) })
      },
      infoText: infoMessage.FIELD_REQUIRED,
      control: {
        value: area,
        setValue: setArea
      }
    },
    type: {
      label: 'Type',
      input: {
        id: 'type',
        name: 'type',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Type'),
        onBlur: (e) => setErrors({ ...errors, type: typeValidation(getFormValue(e)) })
      },
      infoText: infoMessage.FIELD_REQUIRED
    },
    price: {
      label: 'Price',
      input: {
        id: 'price',
        name: 'price',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Price in Euros'),
        onBlur: (e) => setErrors({ ...errors, price: priceValidation(getFormValue(e)) })
      },
      infoText: infoMessage.FIELD_REQUIRED
    },
    description: {
      label: 'Description',
      input: {
        id: 'description',
        name: 'description',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Extra Description')
      }
    }
  };

  return {
    fields,
    handleSubmit,
    errors
  };
};
