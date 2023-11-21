const worker = new Worker('./experiment.js');
const myDiv = document.querySelector('#demo');
const myImg = '/images/yukiko.jpg';

const Button = document.querySelector('#myBtn').addEventListener('click', () => {
    worker.postMessage({
        command: 'generate' 
    });
});

worker.addEventListener('message', (message) => {
    if (message.data === 1) {
        changeImg(myImg);
    }
})

function changeImg(x) {
    const myYukiko = document.createElement('img');
    myYukiko.setAttribute('src', x);
    myDiv.appendChild(myYukiko);
}
