/**
 * Author: Darwin Pena Cabrera
 * Date: 04/05/2026
 * File Name: index.js
 * Description: file to demonstrate the functionality of the modules
*/

// TODO: Import your module using require

const recipes = require("./recipes");

// TODO: Implement your CLI program here
const ingredients = ["ingredient1", "ingredient2"]
console.log(recipes.createRecipe(ingredients));
console.log(recipes.setTimer(15));
console.log(recipes.quit());