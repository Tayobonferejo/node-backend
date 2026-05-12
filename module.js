const http = require("http")
var fs = require("fs")

const server = http.createServer(function(request, response) {
    response.writeHead,(200, {"content-type":"text/plain"})
    response.write(`<h2>home page</h2>`);
    response.end();
})
server.listen(5000);