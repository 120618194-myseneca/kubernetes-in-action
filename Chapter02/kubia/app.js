const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // Check if a version environment variable is set, default to 'default'
  const version = process.env.VERSION || 'default';

  response.end(`You've hit ${os.hostname()} - ${version}\n`);
};

var www = http.createServer(handler);
www.listen(8080);
