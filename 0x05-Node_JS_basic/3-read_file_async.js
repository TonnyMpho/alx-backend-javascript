const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(Boolean); // Remove empty lines

      let totalStudents = 0;
      const fieldCounts = {};

      for (const line of lines.slice(1)) {
        const [, , , field] = line.split(','); // Destructuring to ignore unused variables
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

      resolve(`Number of students: ${totalStudents}`);
    });
  });
}
module.exports = countStudents;
