const { newPromise, getProvinces } = require("./index")

newPromise("id")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

getProvinces("id", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})