import { Container, Text, VStack, Heading, Box, IconButton, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaAirbnb, FaHome, FaChartLine, FaGlobeAmericas } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Short-Term Rental Market Analysis
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Key Players
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaAirbnb} color="red.500" />
              <Text as="span" fontWeight="bold">
                Airbnb:
              </Text>{" "}
              A leading platform for short-term rentals, offering a wide range of properties globally.
            </ListItem>
            <ListItem>
              <ListIcon as={FaHome} color="blue.500" />
              <Text as="span" fontWeight="bold">
                VRBO:
              </Text>{" "}
              Another major player, focusing on vacation rentals and offering a variety of property types.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Current Market Trends
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaChartLine} color="green.500" />
              Increased demand for unique and luxury stays.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="green.500" />
              Growth in remote work leading to longer stays.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="green.500" />
              Rising popularity of suburban and rural rentals.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Regional Variations
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaGlobeAmericas} color="purple.500" />
              <Text as="span" fontWeight="bold">
                North America:
              </Text>{" "}
              High demand in urban centers and tourist destinations.
            </ListItem>
            <ListItem>
              <ListIcon as={FaGlobeAmericas} color="purple.500" />
              <Text as="span" fontWeight="bold">
                Europe:
              </Text>{" "}
              Strong market in historical cities and coastal areas.
            </ListItem>
            <ListItem>
              <ListIcon as={FaGlobeAmericas} color="purple.500" />
              <Text as="span" fontWeight="bold">
                Asia-Pacific:
              </Text>{" "}
              Growing interest in both urban and rural rentals.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Visual Insights
          </Heading>
          <Image src="https://images.unsplash.com/photo-1517137744310-173515c62d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaG9ydC10ZXJtJTIwcmVudGFsJTIwbWFya2V0JTIwdHJlbmRzfGVufDB8fHx8MTcxNzU1ODQ2Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Market Trends" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
