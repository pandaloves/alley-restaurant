import LandingPageLayout from "./layouts/LandingPageLayout";
import Home from "./pages/Home";
import Dish from "./pages/Dish";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [menu, setMenu] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const alertOneRef = useRef();
  const alertTwoRef = useRef();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = inputRef.current.value.trim();

    if (id === "") {
      alertOneRef.current.style.display = "block";
      alertTwoRef.current.style.display = "none";
      return;
    }

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
      );

      if (!response.ok) {
        alertOneRef.current.style.display = "none"; // Hide alertOne
        alertTwoRef.current.style.display = "block"; // Show alertTwo
        return;
      }

      const data = await response.json();
      if (!data.meals) {
        alertOneRef.current.style.display = "none"; // Hide alertOne
        alertTwoRef.current.style.display = "block"; // Show alertTwo
        return;
      }

      setResults(data.meals);
      setInputValue("");

      navigate("/dish", { replace: true, state: { inputValue } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch menu data on component mount
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=beef"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }

      const data = await response.json();
      setMenu(data.meals);
    };

    fetchMenu();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route
          exact
          path="/"
          element={
            <Home
              inputValue={inputValue}
              setInputValue={setInputValue}
              menu={menu}
              inputRef={inputRef}
              navigate={navigate}
              handleSubmit={handleSubmit}
              alertOneRef={alertOneRef}
              alertTwoRef={alertTwoRef}
            />
          }
        />
        <Route path="/dish" element={<Dish results={results} />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
