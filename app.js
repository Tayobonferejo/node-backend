const {readFile, writeFile } = require("fs") 

readFile("./subfolder/test.txt", "utf8" , (err, result) => {
    if(err) {
        console.log(err)
        return
    }

    const first = result;

    readFile("./subfolder/test.txt", "utf8" , (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const second = result;

    writeFile (
       "./result-sync.txt", 
    `Here is the result of the async: ${first}, ${second}`,
    (err, result) => {
        if(err) {
            console.log(err) 
            return
        }
        console.log(result)
    })
})})