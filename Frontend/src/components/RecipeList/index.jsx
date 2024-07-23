import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <div className="recipe-item">
          <Link to={"recipe/"+recipe.id_recipe} className="nav-link"><h2>{recipe.name}</h2></Link>
          <p className="description">{recipe.description}</p>
          {/* <div className="steps">
            <strong>Steps:</strong>
            <ul>
              {recipe.steps}
            </ul>
          </div> */}
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

    // <div>
    //     {recipes.map(recipe => (
    //         <div key={recipe.id}>
    //             <h2><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></h2>
    //         </div>
    //     ))}
    // </div>
  );
};

export default RecipeList;
