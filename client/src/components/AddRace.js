import React, { useState } from "react";
import { ChakraProvider, Container, Box, Heading, Text, Button, Stack, FormControl, FormLabel, Input} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AddRace() {

  const [race , setRace] = useState("");
  const [date, setDate] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { race, date };
      const response = await fetch("http://localhost:5001/races", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      Window.location = "/"; //doesn't seem to do anything
    } catch (err) {
      console.error(err.message);
    }
  }

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
          <Input 
          variant='filled' 
          placeholder='Race name' 
          value={race}
          onChange={e => setRace(e.target.value)} 
          />
          <FormLabel paddingTop='10px' color='blue.700'>Date of race</FormLabel>
          <Input 
          variant='filled' 
          placeholder='Date'
          value={date}
          onChange={e => setDate(e.target.value)}
          />
          <Button onClick={onSubmitForm} width='120px' variant='solid' border='2px' borderColor='blue.700' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >
            Save
            </Button>
            
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