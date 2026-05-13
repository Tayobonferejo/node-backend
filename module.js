const http = require("http");
const {readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html")
const server = http.createServer(function(request, response) {
    const url = request.url;

    if(url === "/") {
        response.writeHead(200, {"content-type":"text/html"})
        response.write(homePage);
        response.end();
    }

    else if (url === "/about") {
        response.writeHead(200, {"content-type":"text/html"})
        response.write(`<h2> about page</h2>`);
        response.end();
    }

    else {
        response.writeHead(404, {"content-type":"text/html"})
        response.write(`<h2>page not found</h2>`);
        response.end();
    }
})
server.listen(5000);