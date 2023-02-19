export const getFormValues = (event) => {
  return {
    title: event.currentTarget.title.value,
    type: event.currentTarget.type.value,
    price: event.currentTarget.price.value,
    description: event.currentTarget.description.value
  };
};

export const getFormValue = (event) => {
  return event.target.value;
};

export const formatAreaField = (area) => {
  let formattedValue = area.mainText ?? '';
  if (area.secondaryText && area.secondaryText !== '') {
    formattedValue = `${formattedValue} - ${area.secondaryText}`;
  }
  return formattedValue;
};
