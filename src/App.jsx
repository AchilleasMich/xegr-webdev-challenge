import { useState } from 'react';
import {
  Button,
  Center,
  Stack,
  Heading,
  NumberInput,
  NumberInputField,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from '@chakra-ui/react';

function App() {
  const [errors, setErrors] = useState({});

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
          <Stack spacing="4" mt={4}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>Title</FormLabel>
              <Input name="title" id="title" placeholder="Plese provide a title" />
              <FormErrorMessage>{errors?.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.area}>
              <FormLabel>Area</FormLabel>
              <Input name="area" id="area" placeholder="Plese provide a area" autoComplete="off" />
              <FormErrorMessage>{errors?.area}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.price}>
              <FormLabel>Price</FormLabel>
              <NumberInput>
                <NumberInputField name="price" id="price" placeholder="Plese provide a price" />
              </NumberInput>
              <FormErrorMessage>{errors?.price}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.type}>
              <FormLabel>Type</FormLabel>
              <Select placeholder="Select Ad type" name="type" id="type">
                {['Rent', 'Buy', 'Exchange', 'Donate'].map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>{errors.type}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Please provide description"
                id="description"
                name="descirption"
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}

export default App;
