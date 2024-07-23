import React from 'react';
import RecipeForm from '../../components/RecipeForm';

const CreateRecipe = ({ addRecipe }) => {
    return (
        <div>
            <h1>Create Recipe</h1>
            <RecipeForm addRecipe={addRecipe} />
        </div>
    );
};

export default CreateRecipe;
