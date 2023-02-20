import { Box, Heading, Center } from '@chakra-ui/react';

export const Empty = () => {
  return (
    <Box>
      <Center mt="32">
        <Heading>No Results Found</Heading>
      </Center>
    </Box>
  );
};
