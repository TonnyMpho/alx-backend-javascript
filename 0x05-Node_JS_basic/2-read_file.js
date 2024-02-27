// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(Boolean);

    let totalStudents = 0;
    const fieldCounts = {};

    for (let i = 1; i < lines.length; i += 1) {
      const [,,, field] = lines[i].split(',');
      if (field) {
        totalStudents += 1;
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      }
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const field of Object.keys(fieldCounts)) {
      const studentList = lines.slice(1)
        .filter((line) => line.split(',')[3] === field)
        .map((line) => line.split(',')[0])
        .join(', ');
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentList}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
