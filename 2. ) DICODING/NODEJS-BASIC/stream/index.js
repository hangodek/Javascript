const fs = require("fs");

const fsWriteStream = fs.createWriteStream("output.txt");
const fsReadStream = fs.createReadStream("./stream/input.txt", {
    highWaterMark: 15
})

fsReadStream.on("readable", () => {
    try {
        const temp = (`${fsReadStream.read()}\n`);
        fsWriteStream.write(temp);
    } catch (error) {
        console.log(error);
    }

})

fsReadStream.on("end", () => {
    console.log("done");
})


//////////////////////





