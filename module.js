const _ = require("lodash")

const items = [2, [3, [4, [5]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people")

const {readFile } = require("fs")

console.log("started a first task")

readFile("./subfolder/test.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result)
    console.log("completed first task")
})

console.log("starting next task")