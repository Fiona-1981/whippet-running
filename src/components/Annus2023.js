import React from "react";
import { ChakraProvider, Container, Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
          <Text color='blue.700' padding='30px' >Here are 2023's races so far...</Text>
          <Text color='blue.700' paddingLeft='30px' paddingBottom='30px' paddingRight='30px' >
            Lots of exciting PostgreSQL stuff to go here! 🤪
          </Text>
          <Stack padding='30px' align='left' >
          <Link to={"/menu"}>
          <Button width='120px' variant='solid' border='2px' borderColor='blue.700' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >
            Back to years
            </Button>
          </Link>
          <Link to={"/"}>
          <Button width='120px' variant='solid' border='2px' borderColor='blue.700' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >
            Back to home
            </Button>
          </Link>
          </Stack>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default Annus2023;