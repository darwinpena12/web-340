/**
 * Author: Darwin Pena Cabrera
 * Date: 04/19/2026
 * File Name: taco-stand.spec.js
 * Description: test file to verify that everything runs correctly
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");


// TODO: Write tests for the TacoStandEmitter methods
function testServeCustomer() {
  // test for serving
  try {
    const tacoStand = new TacoStandEmitter();

    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "Darwin");
    }
  );

  tacoStand.serveCustomer("Darwin");
  console.log("Serving test passed");
  return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco () {
//test for preparing the taco

try {
  const tacoStand = new TacoStandEmitter();

  tacoStand.on("prepare", (taco) => {
    assert.strictEqual(taco, "chicken");
  }
);

tacoStand.prepareTaco("chicken");
console.log("Prepare test passed");
return true;
} catch (err) {
  console.error(`Failed testPrepareTaco: ${err}`);
  return false
}
}

function testHandleRush () {
// test for the handle Rush

try {
  const tacoStand = new TacoStandEmitter();

  tacoStand.on("rush", (rush) => {
    assert.strictEqual(rush, "3");
  }
  );

  tacoStand.handleRush("3");
  console.log("The rush test passed");
  return true;
} catch (err) {
  console.log(`Failed testHandleRush: ${err}`);
  return false;
}
}

// list of tests
test("testServeCustomer", () => {
  expect(testServeCustomer()).toBe(true);
});
test("testPrepareTaco", () => {
  expect(testPrepareTaco()).toBe(true);
});
test("testHandleRush", () => {
  expect(testHandleRush()).toBe(true);
});
