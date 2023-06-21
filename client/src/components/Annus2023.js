import React, { useEffect, useState } from "react";
import { ChakraProvider, Container, Box, Heading, Text, Button, Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Annus2023() {

  const [races, set2023] = useState([]);

  const get2023 = async () => {
    try {

      const response = await fetch("http://localhost:5001/races");
      const jsonData = await response.json();

      set2023(jsonData);
      
    } catch (err) {
      console.error(err.message);      
    }
  };

  useEffect(() => {
    get2023();
  }, []);

  return (
    <>
      <ChakraProvider>
        <Container>
          <Box bg='gray.200' w='100%' h='100%' >
          <Heading align='center' >
            <Text padding='50px' color='blue.700' fontFamily='fantasy' >Whippet Running</Text>
          </Heading>
          <Text fontSize='2xl' color='blue.700' align='center' paddingBottom='30px' >🏃‍♂️ A Repository of Running 🏃‍♂️</Text>
          <Text color='blue.700' padding='30px' >Here are 2023's races so far:</Text>
          <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Race</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
    <Tbody>
      {races.map(race => 
        <Tr>
          <Td>
          {race.race}
          </Td>
          <Td>
          {race.date}
          </Td>
        </Tr> 
        )}
      </Tbody>
  </Table>
</TableContainer>
          <Stack padding='30px' align='left' >
          <Link to={"/addrace"}>
          <Button width='135px' variant='solid' border='2px' borderColor='blue.700' colorScheme='blue' _hover={{ bg: '#4da6ff' }} >
            Add race details
            </Button>
          </Link>
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