import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Select, Flex, Spacer, Box, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const navigate = useNavigate();
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numPassengers, setNumPassengers] = useState(1);

  const handleSearch = () => {
    // Handle the flight search logic here
    console.log("Searching for flights");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Flight Search</Heading>
        <Flex width="100%">
          <Box flex="1" pr={2}>
            <Input placeholder="Departure City" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
          </Box>
          <Spacer />
          <Box flex="1" pl={2}>
            <Input placeholder="Destination City" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
          </Box>
        </Flex>
        <Flex width="100%">
          <Box flex="1" pr={2}>
            <Input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </Box>
          <Spacer />
          <Box flex="1" pl={2}>
            <Input type="date" placeholder="Return Date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </Box>
        </Flex>
        <Flex width="100%">
          <Box flex="1" pr={2}>
            <Select placeholder="Number of Passengers" value={numPassengers} onChange={(e) => setNumPassengers(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </Select>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>Search Flights</Button>
      </VStack>
    </Container>
  );
};

export default FlightSearch;