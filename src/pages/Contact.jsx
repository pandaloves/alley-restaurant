import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box mt={12} mb={10} padding="5px">
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign="center"
        >
          Kontakta oss
        </Heading>

        {/* The contact information */}
        <Flex
          flexDirection="row"
          align="center"
          justify="center"
          border="1px solid pink"
          borderRadius="10px"
          px={2}
          pb={5}
          mx={10}
          mt={5}
          mb={16}
        >
          {/* The contact details */}
          <Stack
            mt={6}
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align="center"
          >
            <Text fontSize="1.2em" color="orange">
              Ring 0704679726 för bordsbokning eller take-away
            </Text>
            <Text fontSize="1.2em">Måndag stängt </Text>
            <Text fontSize="1.2em"> Tisdag 11:00 - 21:00 </Text>
            <Text fontSize="1.2em"> Onsdag 11:00 - 21:00 </Text>
            <Text fontSize="1.2em"> Torsdag 11:00 - 21:00 </Text>
            <Text fontSize="1.2em">Fredag ​​11:00 - 22:00</Text>
            <Text fontSize="1.2em"> Lördag 15:00 - 22:00 </Text>
            <Text fontSize="1.2em"> Söndag 15:00 - 21:00 </Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
