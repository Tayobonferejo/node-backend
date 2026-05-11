const {createReadStream} = require("fs")

const stream = createReadStream("./content/test.txt", {highWaterMark: 90000})

stream.on("data", (result) => {
    console.log(result)
})