const express = require("express");
const path = require("path");
const app = express();

app.get("/", (request,response) => {
    response.json([{name: "john"}, {name: "susan"}])
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000....")
})