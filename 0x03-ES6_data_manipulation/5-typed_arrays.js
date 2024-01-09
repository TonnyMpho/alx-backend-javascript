/*
 * function that returns a new ArrayBuffer with an Int8 value at a specific position.
 * accept three arguments: length (Number), position (Number), and value (Number).
 * If adding the value is not possible the error Position outside range should be thrown
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);

  int8[position] = value;
  return new DataView(buffer);
}
