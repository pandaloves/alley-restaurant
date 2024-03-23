import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-r, gray.100, pink.500,)"
      _hover={{
        bgGradient: "linear(to-r, gray.200, pink.600)",
      }}
      p={2}
      position="fixed"
      bottom="0"
      width="100%"
      zIndex="999"
      display="block"
    >
      {/* Social media icons */}
      <Flex
        justify="center"
        align="center"
        px={3}
        gap="4"
        color="gray.700"
        my={1}
      >
        <a href="#" style={{ cursor: "pointer" }}>
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="#" style={{ cursor: "pointer" }}>
          <ion-icon name="logo-tiktok" href="#" cursor="pointer"></ion-icon>
        </a>
        <a href="#" style={{ cursor: "pointer" }}>
          <ion-icon name="logo-youtube" href="#" cursor="pointer"></ion-icon>
        </a>
        <a href="#" style={{ cursor: "pointer" }}>
          <ion-icon name="logo-instagram" href="#" cursor="pointer"></ion-icon>
        </a>
      </Flex>

      {/* Contact information */}
      <Flex
        justify="center"
        align="center"
        px={3}
        gap="4"
        color="gray.700"
        my={1}
      >
        <Text fontSize="10px">
          {" "}
          <ion-icon
            name="call-outline"
            style={{ fontSize: "10px", marginRight: "2px" }}
          ></ion-icon>
          0704679726
        </Text>
        <Text fontSize="10px">
          <ion-icon
            name="location-outline"
            style={{ fontSize: "10px", marginRight: "2px" }}
          ></ion-icon>
          Vasaloppsvägen 37, 127 42 Hägersten
        </Text>

         {/* Copyright information */}
        <Text fontSize="10px">© 2024 Alley Restaurant</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
