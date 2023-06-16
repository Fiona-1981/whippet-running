import React from "react";
import { ChakraProvider, Container, Box, Heading } from "@chakra-ui/react";

function HomePage() {

  return (
    <>
      <ChakraProvider>
        <Container>
          <Heading color='blue' align='center' >Whippet Running</Heading>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default HomePage;