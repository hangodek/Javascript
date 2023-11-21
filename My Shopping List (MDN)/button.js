const inputDemo = document.getElementById('inputDemo');
const buttonDemo = document.getElementById('buttonDemo');
let myUl = document.getElementById('myUl');

buttonDemo.addEventListener('click', function() {
    let inputValue = inputDemo.value;

    let myDiv = document.createElement('div');

    // List
    let para = document.createElement('li');
    para.textContent = inputValue;

    // Button
    let paraBtn = document.createElement('button');
    paraBtn.textContent = 'Delete';

    paraBtn.addEventListener('click', function() {
        myDiv.remove();
    })

    //Div
    myDiv.appendChild(para);
    myDiv.appendChild(paraBtn);
    

    //MyUl
    myUl.appendChild(myDiv);


    // Input
    inputDemo.focus();
    inputDemo.value = ''
})