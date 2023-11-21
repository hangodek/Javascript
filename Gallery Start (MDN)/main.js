const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */



const myPic = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];

/* Declaring the alternative text for each image file */

myPic.forEach(array => {
    const temp = document.createElement('img');
    temp.setAttribute('src', `/images/${array}.jpg`);
    temp.setAttribute('alt', `${temp}`);
    thumbBar.appendChild(temp);
    console.log(array);
})

thumbBar.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    console.log(e.target.src);
})




/* Wiring up the Darken/Lighten button */


btn.addEventListener('click', () => {
    let btnClass = btn.getAttribute('class');
    if(btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else if(btnClass === 'light') {
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    console.log(btnClass)
})
