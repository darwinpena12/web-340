function main() {
  // check if the user entered a recipe name
  if (process.argv.length != 3) {
    console.error("Usage: node recipe-cli.js <recipe>"); // display error message
    process.exit(1); // exit with a non-zero error code 
  }
  const recipe = process.argv[2]; // get the recipe name from CLI args
  console.log("Recipe: " + recipe); // display the recipe name
}
main(); // call the main function 