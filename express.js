const express = require("express");
const app = express();
const {products } = require("./data");
const { request } = require("http");

app.use(express.static("./methods-public"))

app.use(express.urlencoded({extended: false}))

app.get("/api/people",(request,response) => {
    response.status(200).json({success:true,data:people})
})

app.post("/login",(request,response) => {
  response.send("POST")
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
