const chalk = require("chalk");
const readline = require("readline");
// function to return the color message based on the color selected
function colorMessage(color) {
  const output = "\nYour favorite color is "; // the output string
  // switch statement to match the color to the color message
  switch(color) {
    case "1":
    color = "blue";
    return chalk.blue(output + color);
    case "2":
    color = "red";
    return chalk.red(output + color);
    case "3":
    color = "green";
    return chalk.green(output + color);
    case "4":
    color = "yellow";
    return chalk.yellow(output + color);
    case "5":
    color = "orange";
    return chalk.cyan(output + color);
    default:
    return "Invalid color";
  }
}
function menu() {
  // display a menu with the available color options
  // blue, red, green, yellow, and orange
  console.log("\nAvailable colors:");
  console.log("1. Blue");
  console.log("2. Red");
  console.log("3. Green");
  console.log("4. Yellow");
  console.log("5. Cyan"); 
}
// main function for the program
function main() {
  // create a readline object
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  menu(); // display the menu
  // prompt the user to select a color
  rl.question("\nWhat is your favorite color? ", function(answer) {
    console.log(colorMessage(answer)); // display the color message
    rl.close();
  });
}
main(); // call the main function