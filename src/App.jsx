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
  Input,
  Box
} from '@chakra-ui/react';
import InputFieldInformation from './components/Form/InputFieldInformation';
import { useXEForm } from './hooks/useXEForm';
import { adTypes } from './constants';
import { useFetchPlaces } from './hooks/useFetchPlaces';

function App() {
  const { fields, handleSubmit, errors } = useXEForm();

  const { data, loading, error } = useFetchPlaces('Athin');
  console.log(data, loading, error);

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
              <FormLabel mb={0}>{fields.title.label}</FormLabel>
              <Input {...fields.title.input} />
              <InputFieldInformation error={errors.title} info={fields.title.infoText} />
            </FormControl>
            <FormControl isInvalid={!!errors.area}>
              <FormLabel mb={0}>{fields.area.label}</FormLabel>
              <Input {...fields.area.input} />
              {data.length > 0 && (
                <Box
                  display="flex"
                  flexDir="column"
                  bg="gray.100"
                  position="absolute"
                  top="2xl"
                  zIndex="docked"
                  w="full"
                  mt={1}
                  borderRadius="md"
                  maxH="96"
                  overflowY="auto"
                  // px={2}
                  // py={2}
                >
                  {data.map((d) => {
                    return (
                      <Box
                        key={d.placeId}
                        h="10"
                        px={2}
                        py={2}
                        _hover={{ bg: 'gray.200', cursor: 'pointer' }}
                      >
                        {d.mainText} - {d.secondaryText}
                      </Box>
                    );
                  })}
                </Box>
              )}
              <InputFieldInformation error={errors.area} info={fields.area.infoText} />
            </FormControl>
            <FormControl isInvalid={!!errors.price}>
              <FormLabel mb={0}>{fields.price.label}</FormLabel>
              <NumberInput>
                <NumberInputField {...fields.price.input} />
              </NumberInput>
              <InputFieldInformation error={errors.price} info={fields.price.infoText} />
            </FormControl>
            <FormControl isInvalid={!!errors.type}>
              <FormLabel mb={0}>{fields.type.label}</FormLabel>
              <Select {...fields.type.input}>
                {adTypes.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Select>
              <InputFieldInformation error={errors.type} info={fields.type.infoText} />
            </FormControl>
            <FormControl>
              <FormLabel mb={0}>{fields.description.label}</FormLabel>
              <Textarea {...fields.description.input} />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
}

export default App;
