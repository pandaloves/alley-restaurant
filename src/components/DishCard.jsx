import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import useFavorites from "../source/useFavorites"; 
import { v4 as uuidv4 } from "uuid"; 
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const DishCard = ({ dishes, handleClick }) => {
  DishCard.propTypes = {
    dishes: PropTypes.array,
    handleClick: PropTypes.func,
  };

  const { favorites, toggleFavorite } = useFavorites();

  // Display a notification when a dish is saved as a favorite
  const saveFavorite = (dish) =>
    toast(`${dish} has been saved as your favorite!!`);
  
  // Display a notification when a dish is deleted from favorites
  const deleteFavorite = (dish) =>
    toast(`${dish} has been deleted from your favorite!!`);

  return (
    <>
      {dishes &&
        dishes.map((element) => (
          // Display each dish
          <Card borderRadius={10} p="2" overflow="hidden" key={uuidv4()}>
            {/* Image of the dish */}
            <Image
              src={element.strMealThumb}
              alt={element.strMeal}
              height="150px"
              borderRadius="lg"
              cursor="pointer"
              onClick={() => handleClick(element)}
            />
            <CardBody>
              {/* handle adding or removing favorites */}
              <Box
                fontSize="0.5em"
                color="red.500"
                cursor="pointer"
                onClick={() => {
                  toggleFavorite(element);
                  // Display notification based on favorite status
                  favorites.includes(element.strMeal)
                    ? deleteFavorite(element.strMeal)
                    : saveFavorite(element.strMeal);
                }}
              >
                {/* Conditional rendering of heart icon based on favorite status */}
                {favorites.includes(element.strMeal) ? (
                  <ion-icon
                    name="heart"
                    size="small"
                    style={{ color: "red" }}
                  ></ion-icon>
                ) : (
                  <ion-icon
                    name="heart-outline"
                    size="small"
                    style={{ color: "red" }}
                  ></ion-icon>
                )}
              </Box>

              {/* Showing the name of the dish */}
              <Text
                fontSize="0.8em"
                m={4}
                cursor="pointer"
                onClick={() => handleClick(element)}
              >
                {element.strMeal}
              </Text>

              {/* Showing the price of the dish */}
              <Text fontSize="1em" m={4} color="orange">
                139 kr
              </Text>
            </CardBody>
          </Card>
        ))}
      <ToastContainer />
    </>
  );
};

export default DishCard;
