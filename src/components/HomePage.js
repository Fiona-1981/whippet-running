import React from "react";
import { ChakraProvider, Container, Box, Heading, Text, Image, Center, Button } from "@chakra-ui/react";
import source from "../whippet.png";

function HomePage() {

  return (
    <>
      <ChakraProvider>
        <Container>
          <Box bg='gray.200' w='100%' h='100%' >
          <Heading align='center' >
            <Text padding='50px' color='blue.700' fontFamily='fantasy' >Whippet Running</Text>
          </Heading>
          <Center>
          <Image padding='40px' src={source}/>
          </Center>
          <Text fontSize='2xl' color='blue.700' align='center' paddingBottom='30px' >🏃‍♂️ A Repository of Running 🏃‍♂️</Text>
          <Center paddingBottom='30px' >
          <Button variant='solid' border='2px' borderColor='blue.900' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >Have a look</Button>
          </Center>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default HomePage;