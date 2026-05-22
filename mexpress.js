
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("navbar-app"))


app.get("/", (request, response ) => {
    response.sendFile(path.resolve(__dirname,"./navbar-app/index.html"))
})

app.get("/about", (request, response) => {
    response.send("about Page")
})

app.all("*", (require,response) => {
    response.status(404).send("<h2> resoure not found</h2>");
});

app.listen(5000, () => {
    console.log("server is listening on port 5000.... ")
})
