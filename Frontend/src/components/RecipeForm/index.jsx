import React, { useState } from "react";
import "./style.css";
const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const newRecipe = {
    name,
    description,
    ingredients: ingredients,
    steps: steps,
  };

  const handleSubmit = async () => {
    const request = await fetch(
      "http://localhost/recipe app/Recipes/create.php",
      {
        method: "POST",
        body: JSON.stringify(newRecipe),
      }
    );
    const data = await request.text();
    console.log(data);
    window.location.replace("http://localhost:3000/");
  };

  return (
    <div className="container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      ></textarea>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients"
        required
      ></textarea>
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps"
        required
      ></textarea>
      <button onClick={handleSubmit}>Add Recipe</button>
    </div>
  );
};

export default RecipeForm;
