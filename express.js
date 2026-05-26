const express = require("express");
const path = require("path");
const app = express();
const {products } = require("./data");
const { request } = require("http");


const logger = (request, response, next) => {
    const method = request.method;
    const url = request.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}
app.get("/",logger , (request,response) => {

    response.send(`<h2>Home Page </h2><a href="/api/products">product</a>`);
})
app.get("/about" , logger, (request, response) => {
    response.send("about")
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
