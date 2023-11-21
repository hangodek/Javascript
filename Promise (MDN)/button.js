const button = document.querySelector('#btnDemo');
const name = document.querySelector('#inputDemo');
const value = document.querySelector('#inputDemo2');
const mypara = document.querySelector('#demo');

function alarm (person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error('Please input a non-negeative Numbers !');
        }
        setTimeout(() => {
            resolve(`Wake up, ${person} !`);
        }, delay);
    });
}

button.addEventListener('click', () => {
    alarm(name.value, value.value)
        .then((message) => (mypara.textContent = message))
        .catch((error) => (mypara.textContent = `${error}`));
});