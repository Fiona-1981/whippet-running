import React from "react";
import { ChakraProvider, Container, Box, Heading, Text, Image, Center } from "@chakra-ui/react";
import source from "../whippet.png";

function HomePage() {

  return (
    <>
      <ChakraProvider>
        <Container>
          <Box bg='gray.200' h='100%' >
          <Heading align='center' >
            <Text padding='50px' color='blue.700' fontFamily='fantasy' >Whippet Running</Text>
          </Heading>
          <Center>
          <Image padding='40px' src={source}/>
          </Center>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default HomePage;