const button = document.querySelector("#myBtn");
const input = document.querySelector("#myInput");
const mypara = document.querySelector("#demo");
const worker = new SharedWorker("./experiment.js");


button.onclick = function () {
    worker.port.postMessage(input.value)
    console.log("Message posted to worker")
}

worker.port.onmessage = function (event) {
    mypara.textContent = event.data;
}