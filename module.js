var http = require("http")
var fs = require("fs")

const server = http.createServer(function(request, response) {
    const text = fs.readFileSync("./content/test.txt", "utf8")
    response.end(text)
})
server.listen(5000);