import { NavLink } from "react-router-dom";
import { Box, Flex, List, IconButton } from "@chakra-ui/react";
import logo from "/assets/Logo.png";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import "./Header.css";
import ColorModeSwitch from "../ColorModeSwitch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle navbar menu on smaller screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      zIndex="999"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      margin="0 auto"
      padding="0 20px"
      w="100%"
      h="50px"
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

      {/* Navbar menu */}
      <List className={`navbar-menu ${isOpen ? "active" : ""}`}>
        {/* Close icon for closing the menu on smaller screens */}
        <IconButton
          ml={142}
          mr={2}
          mt={-8}
          size="lg"
          icon={<CloseIcon />}
          onClick={() => setIsOpen(false)}
        />

        {/* Nav links */}
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/favorite">Favoriträtter</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </List>

      {/* Component for toggling color mode */}
      <Box className="nav-icons">
        <ColorModeSwitch />

        {/* Hamburger icon for toggling menu on smaller screens */}
        <HamburgerIcon
          className="nav-toggle"
          display={["flex", "flex", "none", "none"]}
          style={{ width: "20px", height: "28px" }}
          onClick={toggleMenu}
        />
      </Box>
    </Flex>
  );
};

export default Header;
