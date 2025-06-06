import {
  Flex,
  Heading,
  Box,
  Text,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import useFavorites from "../source/useFavorites";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Details from "../components/Details";

const Favorite = () => {
  const { favorites } = useFavorites();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [favDetails, setFavDetails] = useState([]);
  const [openDrawers, setOpenDrawers] = useState([]);
  const [drawerStates, setDrawerStates] = useState({});

  // Fetch the details of a favorite dish
  const fetchFavDetails = async (name) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch details");
      }

      const data = await response.json();
      setFavDetails(data.meals);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  // Handle click event on a favorite dish
  const handleClick = (element) => {
    if (!openDrawers.includes(element)) {
      setOpenDrawers([...openDrawers, element]);
      onOpen();
    }
  };

  // Handle closing of a drawer
  const handleCloseDrawer = () => {
    setOpenDrawers([]);
    onClose();
  };

  // Update drawer states when openDrawers change
  useEffect(() => {
    const newDrawerStates = {};
    openDrawers.forEach((element) => {
      newDrawerStates[element.idMeal] = true;
    });
    setDrawerStates(newDrawerStates);
  }, [openDrawers]);

  return (
    <>
      <Box mt={20} mb={10} padding="5px">
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign="center"
        >
          Favoriträtter
        </Heading>

        <Flex
          flexDirection="row"
          align="center"
          justify="center"
          border="1px solid pink"
          borderRadius="10px"
          px={2}
          pb={10}
          mx={10}
          mt={8}
          mb={16}
        >
          <Stack
            mt={6}
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align="center"
          >
            {/* Mapping over favorite dishes */}
            {favorites.length === 0 ? (
            <Text
              fontSize="lg"
              fontWeight="bold"
              textAlign="center" >
                Det finns ingen favoriträtt.</Text>
              ) 
              : (
            favorites.map((favorite) => (
              <Text
                key={uuidv4()}
                fontSize='lg'
                fontWeight="bold"
                cursor="pointer"
                onClick={() => {
                  fetchFavDetails(favorite);
                  handleClick(favorite);
                }}
              >
                {favorite}
              </Text>
            ))
            )}
          </Stack>
        </Flex>

        {/* Mapping over favorite dish details and rendering the corresponding drawer */}
        {favDetails.map((element) => (
          <Drawer
            key={uuidv4()}
            onClose={handleCloseDrawer}
            isOpen={isOpen}
            size={"xs"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader mt={4} fontSize={13} textAlign={"center"}>
                {`Details about ${element.strMeal}`}
              </DrawerHeader>
              <DrawerBody mb={4}>
                {/* Rendering details component */}
                <Details details={[element]} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ))}
      </Box>
      <ToastContainer />
    </>
  );
};

export default Favorite;
