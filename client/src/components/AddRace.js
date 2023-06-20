import React from "react";
import { ChakraProvider, Container, Box, Heading, Text, Button, Stack, FormControl,
FormLabel, 
Input} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AddRace() {

  return (
    <>
      <ChakraProvider>
        <Container>
          <Box bg='gray.200' w='100%' h='100%' >
          <Heading align='center' >
            <Text padding='50px' color='blue.700' fontFamily='fantasy' >Whippet Running</Text>
          </Heading>
          <Text fontSize='2xl' color='blue.700' align='center' paddingBottom='30px' >🏃‍♂️ A Repository of Running 🏃‍♂️</Text>
          <FormControl padding='30px' >
          <FormLabel color='blue.700' >Name of race</FormLabel>
          <Input variant='filled' placeholder='Race name' />
          <FormLabel paddingTop='10px' color='blue.700'>Date of race</FormLabel>
          <Input variant='filled' placeholder='Date' />
          <Button width='120px' variant='solid' border='2px' borderColor='blue.700' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >
            Save
            </Button>
            {/* And here is the monster challenge. On click, send to database,
            give dialogue "saved!" or something and then when you go back to the 
            relevant year, the entry appears. */}
          </FormControl>
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

export default AddRace;