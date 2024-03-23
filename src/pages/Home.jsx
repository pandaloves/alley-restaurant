import {
  AbsoluteCenter,
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import useDetails from "../source/useDetails";
import { useState } from "react";
import DishCard from "../components/DishCard";
import ToggleDraw from "../components/ToggleDraw";

const Home = ({
  inputValue,
  setInputValue,
  menu,
  inputRef,
  handleSubmit,
  alertOneRef,
  alertTwoRef,
}) => {
  // Prop types
  Home.propTypes = {
    inputValue: PropTypes.string,
    setInputValue: PropTypes.func,
    menu: PropTypes.array,
    inputRef: PropTypes.object,
    handleSubmit: PropTypes.func,
    alertOneRef: PropTypes.object,
    alertTwoRef: PropTypes.object,
  };

  const [openDrawers, setOpenDrawers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { rating, handleRating } = useDetails();

  // Handle click event on dish card
  const handleClick = (element) => {
    setOpenDrawers([...openDrawers, element]);
    onOpen();
  };

  // Handle closing of drawer
  const handleCloseDrawer = () => {
    setOpenDrawers([]);
    onClose();
  };

  return (
    <>
      {/* Main content */}
      <Flex
        align="center"
        justify={{
          base: "center",
          md: "space-around",
          xl: "space-between",
        }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="30vh"
        px={5}
        mx={8}
        my={10}
      >
        {/* Headings and search form */}
        <Stack
          spacing={6}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            Välkommen till Alley!
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            Vi erbjuder dig fräscha och utsökta rätter
          </Heading>

          {/* Search form */}
          <form onSubmit={handleSubmit}>
            <FormControl textAlign={["center", "center", "left", "left"]}>
              <FormLabel mb="5" textAlign={"center"}>
                {" "}
                Sök efter en maträtt
              </FormLabel>
              <InputGroup>
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Ange ett maträttsnamn t.ex. Arrabiata"
                  size="md"
                  mb={2}
                  fontSize="xs"
                  pl="1"
                  style={{
                    border: "2px solid orange",
                    width: "250px",
                  }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <InputRightElement pointerEvents="none">
                  <Search2Icon color="gray.600" marginLeft={-3} />
                </InputRightElement>
              </InputGroup>

              {/* Alert for empty input */}
              <Alert ref={alertOneRef} status="error" display="none">
                <AlertIcon />
                Inmatningsrutan kan inte lämnas tom.
              </Alert>

              {/* Alert for invalid input */}
              <Alert ref={alertTwoRef} status="error" display="none">
                <AlertIcon />
                Ange rätt namn på en maträtt.
              </Alert>

              {/* Submit button */}
              <Button
                borderRadius="8px"
                colorScheme="orange"
                variant="solid"
                py="7"
                px="10"
                my="5"
                mx="auto"
                lineHeight="1"
                size="md"
                type="submit"
              >
                Sök
              </Button>
            </FormControl>
          </form>
        </Stack>

        {/* The restaurant image */}
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 3, md: 0 }}>
          <Image
            src={"/assets/restaurant.jpg"}
            size="100%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box>
      </Flex>

      {/* Divider */}
      <Box position="relative" padding="10" margin="1">
        <Divider />
        <AbsoluteCenter
          bg={"orange.400"}
          borderRadius="10px"
          px="6"
          py="2"
          color="white"
        >
          Populära Maträtter
        </AbsoluteCenter>
      </Box>

      {/* Dish cards */}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        padding="6px"
        spacing={5}
        mx={6}
        mb={16}
      >
        {/* Rendering dish cards */}
        <DishCard dishes={menu} handleClick={handleClick} />

        {/* Toggle drawer component */}
        <ToggleDraw
          openDrawers={openDrawers}
          onClose={onClose}
          isOpen={isOpen}
          rating={rating}
          handleRating={handleRating}
          handleCloseDrawer={handleCloseDrawer}
        />
      </SimpleGrid>
    </>
  );
};

export default Home;
