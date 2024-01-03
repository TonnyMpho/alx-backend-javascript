export default function createIteratorObject(report) {
  const iterable = [];

  Object.keys(report.allEmployees).forEach((key) => {
    iterable.push(...report.allEmployees[key]);
  });
  return iterable;
}
