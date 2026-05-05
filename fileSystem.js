 const {readFileSync, writeFileSync } = require("fs");

 const test = readFileSync("./subfolder/test.txt", "utf8");
 const first = readFileSync("./first.txt", "utf8");
 console.log(`${first} "/n" ${test}`); 

 writeFileSync (
    "./result-sync.txt", 
    `Here is the result: ${first}, ${test}`,
    {flag: "a" }
 )