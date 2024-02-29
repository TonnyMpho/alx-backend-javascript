// function that accepts two arguments (number) a and b
// round a and b and return the sum of it

function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUM') return a + b;
  if (type === 'SUBTRACT') return a - b;
  if (type === 'DIVIDE') {
    if (b === 0) return 'Error';
    return a / b;
  }
}
module.exports = calculateNumber;
