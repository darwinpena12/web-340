"use strict";
// distances of each planet in AU units

const planets = {
  mercury: 0.39,
  venus: 0.72,
  earth: 1.00,
  mars: 1.52,
  jupiter: 5.2,
  saturn: 9.54,
  uranus: 19.22,
  neptune: 30.06
};


function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  const p1 = planets[planet1];
  const p2 = planets[planet2];

  return Math.abs(p1 - p2);
}

module.exports = calculateDistance;