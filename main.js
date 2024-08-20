const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const data = {
    students: [
      { name: "Kevin", age: "55", major: "CSE" },
      { name: "John", age: "306", major: "ECE" },
      { name: "Kratos", age: "200", major: "MECH" }
    ]
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
