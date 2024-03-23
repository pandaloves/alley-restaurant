import { useState } from "react";

const useDetails = () => {
  const [details, setDetails] = useState([]);
  const [rating, setRating] = useState(5);
  
  // Fetch details of a dish by its ID
  const handleDetails = async (id) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch details");
      }

      const data = await response.json();
      setDetails(data.meals);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  // Handle rating changes
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  // Return details state, rating state, handleDetails function, and handleRating function
  return {
    details,
    rating,
    handleDetails,
    handleRating,
  };
};

export default useDetails;
