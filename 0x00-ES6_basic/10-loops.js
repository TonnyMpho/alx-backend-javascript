export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  for (const element of array) {
    array[count] = appendString + element;
    count += 1;
  }

  return array;
}
