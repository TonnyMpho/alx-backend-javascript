export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof (len) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(studentsList) {
    if (!Array.isArray(studentsList) || !studentsList.every((student) => typeof student === 'string')) {
      throw TypeError('students must be a array');
    }
    this._students = studentsList;
  }
}
