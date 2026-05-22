const express = require("express");
const path = require("path");
const app = express();
const {products } = require("./data");

app.get("/", (request,response) => {
    response.send(`<h2>Home Page </h2><a href="/api/products">product</a>`)
})

app.get("/api/products",(request,response) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return{id, name, image};
    })
    response.json(newProducts); 
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000....")
})