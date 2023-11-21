const myVerse = document.querySelector('#myVerse');
const myPre = document.querySelector('#myPre');

myVerse.addEventListener('change', () => {
    const verse = myVerse.value;
    displayUpdater(verse);
    
})

function displayUpdater(value) {
    value = value.replace(" ", "").toLowerCase();
    const data = `${value}.txt`;

    fetch(data)
        .then((response) => {
            if (!response.ok) {
                throw new Error (" It's not Working !");
            }

            return response.text();
        })

        .then((text) => {
            myPre.textContent = text;
        })

        .catch((error) => {
            myPre.textContent = error;
        })

}

displayUpdater("Verse 2")
myVerse.value = "Verse 2"

