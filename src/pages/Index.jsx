import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to TravelBooker</Heading>
        <Text fontSize="lg">Your one-stop shop for all your travel needs.</Text>
        <Box boxSize="sm">
          <Image src="/images/travel-booking.jpg" alt="Travel Booking" />
        </Box>
        <Button as={Link} to="/book" colorScheme="teal" size="lg">Book Your Trip Now</Button>
        <Button as={Link} to="/flight-search" colorScheme="teal" size="lg">Search Flights</Button>
      </VStack>
    </Container>
  );
};

export default Index;