/* function getListStudentIds that returns an array of ids from a list of object.
 * this function is taking one argument which is an array of objects
 * If the argument is not an array, the function is returning an empty array.
 */

export default function getListStudentIds(listStudent) {
  if (Array.isArray(listStudent)) {
    return listStudent.map((student) => student.id);
  }
  return [];
}
