import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const RecipeList = ({ recipes }) => {

  
  useEffect(() => {
    gsap.to(".recipe-item", {
      duration: 1,
      delay:0.5,
      margin: 5,
      ease: "power3.out",
    });
  }, [recipes]);


  return (
    <>
      {recipes.map((recipe) => (
        <div className="recipe-item">
          <Link to={"recipe/"+recipe.id_recipe} className="nav-link"><h2>{recipe.name}</h2></Link>
          <p className="description">{recipe.description}</p>
          
          <div className="ingredients">
            <strong>Ingredients:</strong>
            <ul>
              {recipe.ingredients}
            </ul>
          </div>
          <div className="rating">Rating: {recipe.rating}</div>
          <div className="user">Added by:</div>
        </div>
      ))}
    </>
  );
};

export default RecipeList;
