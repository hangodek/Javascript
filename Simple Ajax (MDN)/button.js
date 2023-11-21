const button = document.querySelector("#myBtn");
const input = document.querySelector("#myInput");
const mypara = document.querySelector("#demo");

button.addEventListener("click", makeRequest);

let httpRequest;

function makeRequest() {
    httpRequest = new XMLHttpRequest;

    if (!httpRequest) {
        alert("This Doesnt Work")
        return false;
    }
    httpRequest.onreadystatechange = alertContent;
    httpRequest.open("GET", "lala.html");
    httpRequest.send();
}

function alertContent() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
        } else {
            alert("There Was Problem :(");
        }
    }
}