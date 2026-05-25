const express = require("express");
const path = require("path");
const app = express();
const {products } = require("./data");
const { request } = require("http");

app.get("/", (request,response) => {
    response.send(`<h2>Home Page </h2><a href="/api/products">product</a>`)
})

app.get("/api/products",(request,response) => {
    // const newProducts = products.map((product) => {
    //     const {id, name, image} = product;
    //     return{id, name, image};
    // })

    const singleProduct = products.find((product) => product.id === 4)
    response.json(singleProduct); 
})

app.get("api/products/productID/reviews/:reviewID", (request, response) => {
    console.log(request.params)
    response.send("Hello world")
})

app.get("/api/v1/query", (request, response) => {
    console.log(request.query)
    response.send("Hello world");
})



app.listen(5000, () => {
    console.log("Server is listening on port 5000....")
})