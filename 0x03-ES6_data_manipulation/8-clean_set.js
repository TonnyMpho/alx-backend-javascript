/*
 * function named cleanSet that returns a string of all the set values
 * that start with a specific string (startString).
 *
 * It accepts two arguments: a set (Set) and a startString (String).
 * When a value starts with startString - appends the rest of the string.
 * The string contains all the values of the set separated by -
 */

export default function cleanSet(set, startString) {
  if (typeof startString === 'string' && startString && set instanceof Set) {
    const array = Array.from(set).filter((val) => val.startsWith(startString));

    return array.map((val) => val.slice(startString.length)).join('-');
  }
  return '';
}
