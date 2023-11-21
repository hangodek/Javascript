/* Synchronous

const fs = require("fs")

const data = fs.readFileSync("./filesystem/notes.txt", "UTF-8")
console.log(data);

*/

const fs = require("fs");

const fsAsync = (error, data) => {
    if (error) {
        console.log(error);
    }

    console.log(data);
    return;
}

const temp = fs.readFile("./filesystem/notes.txt", "UTF-8", fsAsync)

