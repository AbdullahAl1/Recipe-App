import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import CommentSection from "../CommentSection";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  // Find the specific recipe by id
  console.log(id);
  const pdfRef = useRef();

  useEffect(() => {
    const api = async () => {
      try {
        const request = await fetch(
          "http://localhost/recipe app/Recipes/readone.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );
        const data = await request.json();
        console.log(data);
        setRecipe(data.recipe);
      } catch (e) {
        console.log(e);
      }
    };
    api();
  }, []);

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.save("invoice.pdf");
    });
  };

  return (
    <div>
      <div className="recipe-item" ref={pdfRef}>
        <h2>{recipe.name}</h2>
        <p className="description">{recipe.description}</p>
        <div className="steps">
          <strong>Steps:</strong>
          <ul>{recipe.steps}</ul>
        </div>
        <div className="ingredients">
          <strong>Ingredients:</strong>
          <ul>{recipe.ingredients}</ul>
        </div>
        <div className="rating">Rating: {recipe.rating}</div>
        <div className="user">Added by:</div>
        <button onClick={handleDownloadPDF}>download pdf</button>
        <CommentSection />
      </div>
    </div>
  );
};

export default RecipeDetail;
