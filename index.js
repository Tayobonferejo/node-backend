console.log(__dirname)

const os = require("os");
const { relative } = require("path");

// setInterval(() => {
//     console.log("hello world")
// }, 500) 

console.log(module);

const user = os.userInfo();
console.log(user);
console.log(`The System Uptime is ${os.uptime()} seconds`)

console.log(require("os").uptime());

const  currentOS = {
    name: os.type(),
    release: os.release(),
     totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS); 

console.log(require("path").sep);

const {readFileSync} = require("fs");

const fs = require("fs");