const assert = require('assert')
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('return the rounded sum of two integers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('return the rounded sum of an integer and a float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('return the rounded sum of two floats', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('return the rounded sum of two floats', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
