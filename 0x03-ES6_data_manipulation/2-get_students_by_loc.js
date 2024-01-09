/*
 * function getStudentsByLocation that returns an array of
 * objects who are located in a specific city
 */

export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.location === city);
}
