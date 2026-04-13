"use strict";
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Test distance between Earth and Jupiter
function testEarthToJupiter() {
  try{
    assert.strictEqual(calculateDistance("earth", "jupiter"), 4.2);
    console.log("The distance between Earth and Jupiter is correct.");
    return true;
  } catch(error){
    console.error(`failed testEarthToJupiter ${error.message}`);
    return false;
  }
}

// Test distance between Saturn and Neptune
function testSaturnToNeptune() {
  try{
    assert.strictEqual(calculateDistance("saturn", "neptune"), 20.52);
    console.log("The distance between Saturn and Neptune is correct.");
    return true;
  } catch(error){
    console.error(`failed testSaturnToNeptune ${error.message}`);
    return false;
  }
}

// Test distance between Mercury and Uranus
function testMercuryToUranus() {
  try{
    assert.strictEqual(calculateDistance("mercury", "uranus"), 18.83);
    console.log("The distance between Mercury and Uranus is correct.");
    return true;
  } catch(error){
    console.error(`failed testMercuryToUranus ${error.message}`);
    return false;
  }
}
// Call your test functions here
testEarthToJupiter();
testSaturnToNeptune();
testMercuryToUranus();
