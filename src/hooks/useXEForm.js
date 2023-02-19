import { useState } from 'react';
import { errorMessages, infoMessage } from '../constants';

export const useXEForm = () => {
  // Area is a special input in XE form and
  // needs to be a controlled form field
  const [area, setArea] = useState({
    placeId: '',
    mainText: '',
    secondaryText: ''
  });

  const [errors, setErrors] = useState({});
  const validate = (e) => {
    let errors = {};
    const title = e.currentTarget.title.value;
    if (!title) errors.title = errorMessages.FIELD_REQUIRED;
    if (title.length > 155) errors.title = errorMessages.MAX_CHARS(155);

    const area = e.currentTarget.area.value;
    if (!area) errors.area = errorMessages.FIELD_REQUIRED;

    const type = e.currentTarget.type.value;
    if (!type) errors.type = errorMessages.FIELD_REQUIRED;

    const price = e.currentTarget.price.value;
    if (!price) errors.price = errorMessages.FIELD_REQUIRED;

    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(e);
    const title = e.currentTarget.title.value;
    const area = e.currentTarget.area.value;
    const type = e.currentTarget.type.value;
    const price = e.currentTarget.price.value;
    const description = e.currentTarget.description.value;
    console.log(title, area, type, price, description);
  };

  const fields = {
    title: {
      label: 'Title',
      input: { id: 'title', name: 'title', placeholder: infoMessage.FIELD_PLACEHOLDER('Title') },
      infoText: infoMessage.FIELD_REQUIRED
    },
    area: {
      label: 'Area',
      input: { id: 'area', name: 'area', placeholder: infoMessage.FIELD_PLACEHOLDER('Area') },
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
        placeholder: infoMessage.FIELD_PLACEHOLDER('Type')
      },
      infoText: infoMessage.FIELD_REQUIRED
    },
    price: {
      label: 'Price',
      input: {
        id: 'price',
        name: 'price',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Price')
      },
      infoText: infoMessage.FIELD_REQUIRED
    },
    description: {
      label: 'Description',
      input: {
        id: 'description',
        name: 'description',
        placeholder: infoMessage.FIELD_PLACEHOLDER('Description')
      }
    }
  };

  return {
    fields,
    handleSubmit,
    errors
  };
};
