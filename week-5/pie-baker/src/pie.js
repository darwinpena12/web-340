/**
 * Author: Darwin Pena Cabrera  
 * Date: 04/26/2026
 * File Name: pie.js
 * Description: Index file
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ["flour", "sugar", "butter"];

  // Verifying that all the essential ingredients are included
  const missing = essentialIngredients.filter(item => !ingredients.includes(item));

  if (missing.length > 0 ) {
    console.warn(`Missing essential ingredients: ${missing.join(", ")}`);
    process.exit(1);
  }

  return `Success: ${pieType} pie baked successfully with ${ingredients.join(", ")}.`;
}

module.exports = { bakePie };