const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
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

    let result = `Number of students: ${totalStudents}`;

    for (const field of Object.keys(fieldCounts)) {
      const studentList = lines.slice(1)
        .filter((line) => line.split(',')[3] === field)
        .map((line) => line.split(',')[0])
        .join(', ');
      result += `\nNumber of students in ${field}: ${fieldCounts[field]}. List: ${studentList}`;
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    const studentsInfo = await countStudents(databasePath);

    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(PORT);

module.exports = app;
