// src/pages/Recipe.js
import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../../components/RecipeDetail';
import CommentSection from '../../components/CommentSection';
import { useState, useEffect } from "react";

const Recipe = () => {
    const { id } = useParams();


    return (
        <div>
            {
            // recipe ? (
            //     <>
            //         <RecipeDetail />
            //         {/* <CommentSection comments={recipe.comments} addComment={comment => addComment(id, comment)} /> */}
            //     </>
            // ) : (
            //     <p>Recipe not found.</p>
            // )
            <RecipeDetail />
            }
        </div>
    );
};

export default Recipe;
