/*
 * function getStudentIdsSum that returns the sum of all the student ids.
 */

export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((total, student) => total + student.id, 0);
}
