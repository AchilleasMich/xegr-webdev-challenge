import { Box, Heading, Center, SlideFade } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box>
      <Center mt="32">
        <SlideFade in={true} initialScale={0.8} offsetY="1000px">
          <Heading>Welcome</Heading>
        </SlideFade>
      </Center>
    </Box>
  );
};

export default Home;
