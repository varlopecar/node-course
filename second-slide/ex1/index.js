const http = require('http');
const server = http.createServer()
const PORT = 3000;
const { planets } = require('./planets.js');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(planets));
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});