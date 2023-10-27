const button = document.querySelector("input");

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const catchEm = async () => {
  randomize = getRandomArbitrary(0, 100);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${String(randomize)}/`);
    const data = await response.json();
    console.log(data);
}

button.addEventListener("click", catchEm);