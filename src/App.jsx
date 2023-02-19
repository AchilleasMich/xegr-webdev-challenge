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
  Input
} from '@chakra-ui/react';
import InputFieldInformation from './components/Form/InputFieldInformation';
import { useXEForm } from './hooks/useXEForm';
import { adTypes } from './constants';

function App() {
  const { fields, handleSubmit, errors } = useXEForm();

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
            <FormControl isInvalid={!!errors.title}>
              <FormLabel mb={0}>Title</FormLabel>
              <Input {...fields.title} />
              <InputFieldInformation isInvalid={!!errors.title} message="Field is required" />
            </FormControl>
            <FormControl isInvalid={!!errors.area}>
              <FormLabel mb={0}>Area</FormLabel>
              <Input {...fields.area} />
              <InputFieldInformation isInvalid={!!errors.area} message="Field is required" />
            </FormControl>
            <FormControl isInvalid={!!errors.price}>
              <FormLabel mb={0}>Price</FormLabel>
              <NumberInput>
                <NumberInputField {...fields.price} />
              </NumberInput>
              <InputFieldInformation isInvalid={!!errors.price} message="Field is required" />
            </FormControl>
            <FormControl isInvalid={!!errors.type}>
              <FormLabel mb={0}>Type</FormLabel>
              <Select {...fields.type}>
                {adTypes.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Select>
              <InputFieldInformation isInvalid={!!errors.type} message="Field is required" />
            </FormControl>
            <FormControl>
              <FormLabel mb={0}>Description</FormLabel>
              <Textarea {...fields.description} />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}

export default App;
