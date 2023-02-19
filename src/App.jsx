import { Button, Center, Stack, Heading } from '@chakra-ui/react';

import {
  AreaAutoCompleteFormControl,
  InputFormControl,
  NumberInputFormControl,
  SelectInputFormControl,
  TextareaInputFormControl
} from './components/Form';

import { useXEForm } from './hooks/useXEForm';
import { adTypes } from './constants';
import { useFetchPlaces } from './hooks/useFetchPlaces';

function App() {
  const { fields, handleSubmit, errors } = useXEForm();

  const { data: places, loading, error: fetchError } = useFetchPlaces(fields.area.control.value);
  console.log(places, loading, fetchError);

  return (
    <Center h="container.sm" data-testid="xe-webdev-challenge">
      <Stack spacing="">
        <Heading mb={4} as="h1" size="xl" noOfLines={1}>
          Xe.gr Web Dev Challenge
        </Heading>
        <Center>
          <Heading as="h2" size="md" h="6">
            New Property Form
          </Heading>
        </Center>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={4}>
            <InputFormControl field={fields.title} error={errors.title} />
            <AreaAutoCompleteFormControl
              area={fields.area}
              error={errors.area || fetchError}
              places={places}
            />
            <NumberInputFormControl field={fields.price} error={errors.price} />
            <SelectInputFormControl field={fields.type} error={errors.type} options={adTypes} />
            <TextareaInputFormControl field={fields.description} error={errors.description} />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}

export default App;
