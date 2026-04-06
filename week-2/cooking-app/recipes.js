/**
 * Author: Darwin Pena Cabrera
 * Date: 04/05/2026
 * File Name: recipes.js
 * Description: Function to run the recipe application
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  return "Recipe created with ingredients: " + ingredients.join(", ");
  // TODO: Implement this function
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
  // TODO: Implement this function
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Program exited";
}

// TODO: Export the functions

module.exports = {
  createRecipe,
  setTimer,
  quit
};