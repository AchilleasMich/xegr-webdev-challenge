import { useState } from 'react';

export const useXEForm = () => {
  const [errors, setErrors] = useState({});

  const validate = (e) => {
    let errors = {};
    const title = e.currentTarget.title.value;
    if (!title) errors.title = 'Title is required';
    if (title.length > 155) errors.title = 'Title must not exceed 155 chars';

    const area = e.currentTarget.area.value;
    if (!area) errors.area = 'Area is required';

    const type = e.currentTarget.type.value;
    if (!type) errors.type = 'Type is required';

    const price = e.currentTarget.price.value;
    if (!price) errors.price = 'Price is required';

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
      id: 'title',
      name: 'title',
      placeholder: 'Please Provide Title'
    },
    area: {
      id: 'area',
      name: 'area',
      placeholder: 'Please Provide Area'
    },
    type: {
      id: 'type',
      name: 'type',
      placeholder: 'Please Provide Type'
    },
    price: {
      id: 'price',
      name: 'price',
      placeholder: 'Please Provide Price'
    },
    description: {
      id: 'description',
      name: 'description',
      placeholder: 'Please Provide Description'
    }
  };

  return {
    fields,
    handleSubmit,
    errors
  };
};
