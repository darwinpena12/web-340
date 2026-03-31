/**
 * Author: Darwin Pena Cabrera
 * Date: 03/29/2026
 * File Name: weight-converter.js
 * Description: The script will take one command line argument, which is the weight in pounds, and print the
converted weight in kilograms to the console.
*/

"use strict";

// TODO: Implement the weight conversion logic here

// Type the weight in pounds
const pounds = process.argv[2];

// verify if a command argument was input
if (!pounds) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1); // exit with error code
}
// check if the input is a number
if (isNaN(pounds)) {
console.error("Input must be a number."); // display error message
process.exit(1); // exit with a non-zero error code
}

// form to convert the weight from pounds to kilograms
const kilograms = pounds * 0.453592;

// form to print the result in the console
console.log(kilograms.toFixed(2));