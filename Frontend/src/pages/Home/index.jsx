// src/pages/Home.js
import React, { useState, useEffect } from "react";
import RecipeList from "../../components/RecipeList";
import "./style.css"

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  // const addRecipe = (recipe) => {
  //     setRecipes([...recipes, recipe]);
  // };

  useEffect(() => {
    const api = async () => {
      try {
        const request = await fetch(
          "http://localhost/recipe app/Recipes/readall.php",
          { method: "GET" }
        );
        const data = await request.json();
        console.log(data);
        setRecipes(data.recipes);
      } catch (e) {
        console.log(e.message);
      }
    };
    api();
  },[]);

  return (
    <>
    <h1>Recipe App</h1>
      <div className="container">
        <div id="recipe-list">
          <RecipeList recipes={recipes} />
        </div>
      </div>
      </>
  );
};

export default Home;
