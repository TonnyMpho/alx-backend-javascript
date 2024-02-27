const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(Boolean); // Remove empty lines

    let totalStudents = 0;
    const fieldCounts = {};

    for (const line of lines.slice(1)) {
      const [, , , field] = line.split(',');
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

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2];
      const studentsInfo = await countStudents(databasePath);

      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT);

module.exports = app;
