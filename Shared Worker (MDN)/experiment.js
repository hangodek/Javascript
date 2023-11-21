onconnect = function (event) {
    const port = event.ports[0];

    port.onmessage = function (x) {
        console.log("Data Received");
        const temp = x.data;
        port.postMessage(temp);
    }
}