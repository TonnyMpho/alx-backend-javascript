// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('type is SUM', function () {
    it('should round the numbers and return the sum', function () {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
  });

  describe('type is SUBTRACT', function () {
    it('should round the numbers and return the subtraction result', function () {
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
      assert.equal(calculateNumber('SUBTRACT', 5, 3.7), 1);
    });
  });

  describe('type is DIVIDE', function () {
    it('should round the numbers and return the division result', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.equal(calculateNumber('DIVIDE', 8, 2), 4);
    });

    it('should handle division by 0 and return Error', function () {
      assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
