/**
 * Author: Darwin Pena Cabrera
 * Date: 04/19/2026
 * File Name: index.js
 * Description: 
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

// Event listeners for customer, prepare and rush
tacoStand.on("serve", (customer) => {
  console.log("Taco Stand serves: " + customer);
});

tacoStand.on("prepare", (taco) => {
  console.log("Taco Stand prepares: " + taco + " taco");
});

tacoStand.on("rush", (rush) => {
  console.log("Taco Stand handles rush: " + rush);
});



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const value = args.join(" ");

  if (command === "serve") {
    tacoStand.serveCustomer(value);
  } else if (command === "prepare") {
    tacoStand.prepareTaco(value);
  } else if (command === "rush") {
    tacoStand.handleRush(value);
  }else {
    console.log("Unknown command");
  }

  // TODO: Handle the commands
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);