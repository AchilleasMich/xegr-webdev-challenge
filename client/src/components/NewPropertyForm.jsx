import { Button, Center, Stack, Heading, Box } from '@chakra-ui/react';
import {
  AreaAutoCompleteFormControl,
  InputFormControl,
  NumberInputFormControl,
  SelectInputFormControl,
  TextareaInputFormControl
} from './Form';
import { useXEForm } from '../hooks/useXEForm';
import { adTypes } from '../constants';
import { useFetchPlaces } from '../hooks/useFetchPlaces';
import { usePostProperty } from '../hooks/usePostProperty';


// Component to handle the /property route
// Brings together the form logic, the fetching of the
// places suggetions and the POSTing of the form
const NewPropertyForm = () => {
  const { fields, handleSubmit, errors } = useXEForm();

  const {
    data: places,
    error: fetchError,
    loading: fetching
  } = useFetchPlaces(fields.area.control.value);
  const { loading, postProperty } = usePostProperty();

  return (
    <Box display={'flex'} flexDir="column" gap={1}>
      <Center>
        <Heading as="h2" size="md" h="6" mt={1} pt={4} justifyContent="center">
          New Property Form
        </Heading>
      </Center>
      <form onSubmit={handleSubmit(async (values) => await postProperty(values))}>
        <Stack spacing={2} mt={4}>
          <InputFormControl field={fields.title} error={errors.title} />
          <AreaAutoCompleteFormControl
            area={fields.area}
            error={errors.area || fetchError}
            places={places}
            loading={fetching}
          />
          <NumberInputFormControl field={fields.price} error={errors.price} />
          <SelectInputFormControl field={fields.type} error={errors.type} options={adTypes} />
          <TextareaInputFormControl field={fields.description} error={errors.description} />
          <Button type="submit" isLoading={loading}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default NewPropertyForm;
