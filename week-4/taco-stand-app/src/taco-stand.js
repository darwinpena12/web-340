/**
 * Author: Darwin Pena Cabrera
 * Date: 04/19/2026
 * File Name: taco-stand.js
 * Description:
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush

class TacoStandEmitter extends EventEmitter {
  // Serve tacos to the customers
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  // Prepares the tacos for the customer
  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  // Tells the staff to rush
  handleRush(rush) {
    this.emit("rush", rush)
  }
}

module.exports = TacoStandEmitter;