const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url === "/") {
        return res.end("Welcome to our page")
    }

    if(req.url === "/about") {
        return res.end("Here is our short history")
    }

    res.setHeader("Content-Type", "text/html")
    res.end(`<h2>Oops...</h2>
        <p> We can't seem to find the page you are looking for</p>
        <a href= "/">back home</a>
        `
    )
})

server.listen(5000)