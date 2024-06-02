const button = document.querySelector("#myBtn");
const input = document.querySelector("#myInput");
const mypara = document.querySelector("#demo");

function sumToFor(n) {
    let placeHolder = 0;
    let result = 0;
    for (let i = n; i > placeHolder; i--) {
        result += i;
    }

    return result;
}

function sumToRecursive(n) {
    if (n == 1 || n == 0) {
        return n;
    } else {
        return n + (sumToRecursive(n - 1));
    }
}

function factorial(n) {
    if (n == 1 || n == 0) {
        return n;
    } else {
        return n * (factorial(n - 1));
    }
    
}

console.log(sumToFor(4));
console.log(sumToRecursive(3));
console.log(factorial(5));