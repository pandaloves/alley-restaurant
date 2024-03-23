import { useState, useEffect } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite status of a dish
  const toggleFavorite = (dish) => {
    const index = favorites.findIndex((favDish) => favDish === dish.strMeal);
    if (index !== -1) {
      // If the dish is already a favorite, remove it from favorites
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      // If the dish is not a favorite, add it to favorites
      setFavorites([...favorites, dish.strMeal]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, dish.strMeal])
      );
    }
  };
  
  // Retrieve favorites from local storage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Return favorites state and toggleFavorite function
  return { favorites, toggleFavorite };
};

export default useFavorites;
