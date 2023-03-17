const http = require('http');

let component1 = '<h1>welcome to fake angular</h1> ';
let component2 = '<p>text text text text</p>';



const hostname = '127.0.0.1';
const port = 4200;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(component1 + component2);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/**
 * node is a way to run javascript independently of html, potentially
 * as its own web server
 * 
 * this allows us to make server-sided js applications rather than client-
 * side applications
 * 
 * angular is fundamentally just delivering HTML to the user via a HTTP
 * serer, as is done here
 */