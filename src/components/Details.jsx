import {
  Box,
  Flex,
  Image,
  ListItem,
  Select,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Details = ({ details }) => {
  // PropTypes 
  Details.propTypes = {
    details: PropTypes.array,
  };

  const [ratings, setRatings] = useState(() => {
    
    // Load ratings from localStorage or default to 5 for each item
    const savedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    return details.reduce((acc, item) => {
      acc[item.idMeal] = savedRatings[item.idMeal] || 5;
      return acc;
    }, {});
  });

  // Update localStorage whenever ratings change
  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  // Handle updating ratings
  const handleRating = (id, newRating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: newRating,
    }));
  };

  return (
    <>
      {details && (
        <Flex
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {/* Mapping through each detail item */}
          {details.map((item) => (
            <Flex
              align="center"
              justify="center"
              direction="row"
              wrap="wrap"
              minH="70vh"
              px={2}
              mx={2}
              key={item.idMeal}
            >
              {/* Displaying the image of the dish */}
              <Box>
                <Image
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  size="100%"
                  rounded="1rem"
                  shadow="2xl"
                />
              </Box>

              <Box>
                {/* Displaying rating */}
                <Wrap
                  spacing="5px"
                  justify="center"
                  fontSize="1em"
                  margin="10px"
                  fontWeight="semibold"
                >
                  <WrapItem>Rating:</WrapItem>
                  <WrapItem>{ratings[item.idMeal]}</WrapItem>
                </Wrap>

                {/* Select for updating rating */}
                <Select
                  placeholder="Select rating"
                  value={ratings[item.idMeal]}
                  style={{
                    fontSize: "16px",
                    margin: "7px",
                    fontWeight: "bold",
                  }}
                  onChange={(e) =>
                    handleRating(item.idMeal, Number(e.target.value))
                  }
                >
                  {/* Options for selecting rating */}
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Stars
                    </option>
                  ))}
                </Select>

                {/* Displaying details of the dish */}
                <UnorderedList>
                  <ListItem>
                    <b>Name:</b> {item.strMeal}
                  </ListItem>
                  <ListItem>
                    <b>Price:</b> 139 kr
                  </ListItem>
                  <ListItem>
                    <b>Category:</b> {item.strCategory}
                  </ListItem>
                  <ListItem>
                    <b>Area: </b>
                    {item.strArea}
                  </ListItem>
                  <ListItem>
                    <b>Ingredients:</b> {item.strIngredient1},
                    {item.strIngredient2}, {item.strIngredient3},
                    {item.strIngredient4}
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Details;
