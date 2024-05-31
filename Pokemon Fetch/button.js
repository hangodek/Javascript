const button = document.querySelector("#myBtn");
const input = document.querySelector("#myInput");
const mypara = document.querySelector("#demo");

async function getPokeSprite() {
    try {
        const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)

        if (!pokeData.ok) {
            throw new Error("Couldn't fetch");
        }

        const pokeDataJson = await pokeData.json();
        const pokeSprites = pokeDataJson.sprites.front_default;

        mypara.src = pokeSprites;

    }
    catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", getPokeSprite);