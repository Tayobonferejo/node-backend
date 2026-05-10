const http = require("http")

const server = http.createServer( (request, Response) => {
    if(request.url === "/") {
        Response.end("Home Page")
    }

    if (request.url === "/about") {
        // blocking code 
        for (let i = 0; i < 500; i++) {
            for(let j = 0; j < 500; j++) {
                console.log(`${i} ${j}`)
            }
        }
        Response.end("Bout Page")
    }
})

server.listen(5000, () => {
    console.log("server listening on port: 5000....");
})