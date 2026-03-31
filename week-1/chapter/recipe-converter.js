const readline = require("readline"); // import readline module
function main() {
  // create readline interface object
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // prompt the user to input an ingredient and its quantity in tablespoons
  rl.question("Enter an ingredient: ", function (ingredient) {
    rl.question("Enter the quantity in tablespoons: ", function (tablespoons) {
      // check if the input is a number
      if (isNaN(tablespoons)) {
        console.error("Input must be a number."); // display error message
        process.exit(1); // exit with a non-zero error code
      }
      const cups = (tablespoons / 16).toFixed(2); // convert tablespoons to cups and round to two decimal places
      console.log(
      `For ${ingredient}, ${tablespoons} tablespoons is equivalent to ${cups} cups.`
      ); // display the conversion
      rl.close(); // close the readline object
    });
  });
}
main(); // call the main function