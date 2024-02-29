// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers when type is SUM', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('should return the result of subtracting two rounded numbers when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it('should return the result of dividing two rounded numbers when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });

  it('should return "Error" when trying to divide by 0', () => {
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });
});
