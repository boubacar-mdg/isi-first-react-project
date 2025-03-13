import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Fetch() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataAsync = async () => {
    setLoading(true);
    console.log("Récupération des données...");
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const response = await fetch(url);
    const fetchedData = await response.json();
    setMeals(fetchedData.meals);
    setLoading(false);
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  useEffect(() => {
    console.log(meals);
  }, [meals]);

  return (
    <>
      {loading ?  <>Chargement...</>: meals.map((data) => {
        return <MealItem data={data} />;
      })}
      <button onClick={fetchDataAsync}>Chercher les plats</button>
    </>
  );
}
