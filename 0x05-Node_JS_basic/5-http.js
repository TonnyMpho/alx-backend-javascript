const http = require('http');
const fs = require('fs').promises;

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

      results = `Number of students: ${totalStudents}\n`;
      for (const field of Object.keys(fieldCounts)) {
        const studentList = lines.slice(1)
          .filter((line) => line.split(',')[3] === field)
          .map((line) => line.split(',')[0])
        results += `Number of students in ${field}: ${fieldCounts[field]}. List: ${studentList}`;
      }

      resolve(results);
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2];
      const studentsInfo = await countStudents(databasePath);

      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT);

module.exports = app;
