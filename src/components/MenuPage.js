import React from "react";
import { ChakraProvider, Container, Box, Heading, Text, Center, Button } from "@chakra-ui/react";

function MenuPage() {

  return (
    <>
      <ChakraProvider>
        <Container>
          <Box bg='gray.200' w='100%' h='100%' >
          <Heading align='center' >
            <Text padding='50px' color='blue.700' fontFamily='fantasy' >Whippet Running</Text>
          </Heading>
          <Text fontSize='2xl' color='blue.700' align='center' paddingBottom='30px' >🏃‍♂️ A Repository of Running 🏃‍♂️</Text>
          <Center paddingBottom='30px' >
          <Button variant='solid' border='2px' borderColor='blue.700' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >Have a look</Button>
          </Center>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default MenuPage;