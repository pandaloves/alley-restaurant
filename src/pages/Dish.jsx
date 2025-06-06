import { SimpleGrid, useDisclosure, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import DishCard from "../components/DishCard";
import ToggleDraw from "../components/ToggleDraw";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Dish = ({ results }) => {
  // Prop Types for the Dish component
  Dish.propTypes = {
    results: PropTypes.array,
  };

  const { onOpen, onClose } = useDisclosure();
  const [openDrawers, setOpenDrawers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle browser back navigation
  useEffect(() => {
    const handleBrowserBackNavigation = () => {
      // Check if the previous location is the Dish page
      if (location.pathname === "/dish") {
        // Navigate back to the Home page
        navigate("/", { replace: true });
      }
    };

    // Add an event listener for popstate event
    window.addEventListener("popstate", handleBrowserBackNavigation);

    return () => {
      // Remove the event listener when component unmounts
      window.removeEventListener("popstate", handleBrowserBackNavigation);
    };
  }, [location.pathname, navigate]);

  // Handle click on dish card
  const handleClick = (element) => {
    if (!openDrawers.includes(element)) {
      setOpenDrawers([...openDrawers, element]);
      onOpen();
    }
  };

  // Handle closing of drawer
  const handleCloseDrawer = () => {
    setOpenDrawers([]);
    onClose();
  };

  return (
    <>
      <Box mt={20} mb={5} padding="5px">
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign="center"
        >
          Sökresultat
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        padding="6px"
        mt={12}
        mb={10}
        mx={6}
        spacing={5}
      >
        {/* Component to display dish cards */}
        <DishCard dishes={results} handleClick={handleClick} />

        {/* Component for toggle the drawer */}
        <ToggleDraw
          openDrawers={openDrawers}
          handleCloseDrawer={handleCloseDrawer}
        />
      </SimpleGrid>
    </>
  );
};

export default Dish;
