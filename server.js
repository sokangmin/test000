var http = require('http');
var os = require('os');
var handleRequest = function(request, response) {
	response.writeHead(200);
	response.end(os.hostname() + " Hello Kubernetes!");
}
var server = http.createServer(handleRequest);
server.listen(8080);
