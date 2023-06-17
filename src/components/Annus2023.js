import React from "react";
import { ChakraProvider, Container, Box, Heading, Text, } from "@chakra-ui/react";

function Annus2023() {

  return (
    <>
      <ChakraProvider>
        <Container>
          <Box bg='gray.200' w='100%' h='100%' >
          <Heading align='center' >
            <Text padding='50px' color='blue.700' fontFamily='fantasy' >Whippet Running</Text>
          </Heading>
          <Text fontSize='2xl' color='blue.700' align='center' paddingBottom='30px' >🏃‍♂️ A Repository of Running 🏃‍♂️</Text>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default Annus2023;