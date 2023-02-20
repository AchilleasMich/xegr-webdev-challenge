import { Box, Heading, Text, Stack } from '@chakra-ui/react';

export const Error = () => {
  return (
    <Box>
      <Stack mt="32">
        <Heading>Something went wrong...</Heading>
        <Text>Please refresh the page</Text>
      </Stack>
    </Box>
  );
};
