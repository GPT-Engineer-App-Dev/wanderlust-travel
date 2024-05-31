import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { flightDetails, passengerInfo, confirmationNumber } = location.state;

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Booking Confirmation</Heading>
        <Box>
          <Heading as="h2" size="md">Flight Details</Heading>
          <Text>Departure City: {flightDetails.departureCity}</Text>
          <Text>Destination City: {flightDetails.destinationCity}</Text>
          <Text>Departure Date: {flightDetails.departureDate}</Text>
          <Text>Return Date: {flightDetails.returnDate}</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">Passenger Information</Heading>
          <Text>Name: {passengerInfo.name}</Text>
          <Text>Email: {passengerInfo.email}</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">Confirmation Number</Heading>
          <Text>{confirmationNumber}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;