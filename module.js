const http = require("http");
const {readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
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

     else if (url === "/styles.css") {
        response.writeHead(200, {"content-type":"text/css"})
        response.write(homeStyle);
        response.end();
    }

      else if (url === "/logo.svg") {
        response.writeHead(200, {"content-type":"image/svg+xml"})
        response.write(homeImage);
        response.end();
    }

      else if (url === "/browser-app.js") {
        response.writeHead(200, {"content-type":"text/javascript "})
        response.write(homeStyle);
        response.end();
    }

    else {
        response.writeHead(404, {"content-type":"text/html"})
        response.write(`<h2>page not found</h2>`);
        response.end();
    }
})
server.listen(5000);