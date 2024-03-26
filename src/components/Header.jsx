import { useState } from "react";
import { Flex, IconButton, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";
import { NavLink } from "react-router-dom";
import logo from "/assets/Logo.png";

const Header = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex
        as="nav"
        position="fixed"
        zIndex={20}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0 15px"
        w="100%"
        h="45px"
        top="0"
        color="black"
        fontSize="1em"
        boxShadow="0 1.15rem 3.1rem rgba(0, 0, 0, 0.03)"
        bgGradient="linear(to-r, gray.100, pink.500,)"
        _hover={{
          bgGradient: "linear(to-r, gray.200, pink.600)",
        }}
      >
        {/* Logo */}
        <Box>
          <img src={logo} alt="Logo" width="50px" height="60px" />
        </Box>

        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]} gap={40} style={{}}>
          <style>
            {`
              .navLink:hover {
                color: orange;
              }
            `}
          </style>
          <NavLink to="/" className="navLink">
            Hem
          </NavLink>
          <NavLink to="/favorite" className="navLink">
            Favoriträtter
          </NavLink>
          <NavLink to="/contact" className="navLink">
            Kontakt
          </NavLink>
        </Flex>

        <Box style={{ display: "flex", flexDirection: "row", gap: "1px" }}>
          <ColorModeSwitch />
          {/* Mobile */}
          <IconButton
            aria-label="Open Menu"
            size="md"
            mr={1}
            backgroundColor="transparent"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />
        </Box>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="160px"
        display={display}
        backgroundColor="orange"
        color="black"
        zIndex={30}
        height="200px"
        pos="fixed"
        top="43.8px"
        right="25px"
        borderRadius="10px"
        flexDir="column"
        lineHeight="38px"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="md"
            backgroundColor="transparent"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center" height="200px" style={{}}>
          <style>
            {`
            .hamburger-link:hover {
                color: white;
              }
            `}
          </style>
          <NavLink to="/" className="hamburger-link">
            Hem
          </NavLink>
          <NavLink to="/favorite" className="hamburger-link">
            Favoriträtter
          </NavLink>
          <NavLink to="/contact" className="hamburger-link">
            Kontakt
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
