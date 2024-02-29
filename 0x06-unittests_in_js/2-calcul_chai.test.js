// 1-calcul.test.js
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('type is SUM', () => {
    it('should round the numbers and return the sum', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
  });

  describe('type is SUBTRACT', function () {
    it('should round the numbers and return the subtraction result', function () {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 5, 3.7)).to.equal(1);
    });
  });

  describe('type is DIVIDE', function () {
    it('should round the numbers and return the division result', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    });

    it('should handle division by 0 and return Error', function () {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
