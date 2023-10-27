const button = document.querySelector("input");

button.addEventListener("click", catchEm);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function catchEm() {
  randomize = getRandomArbitrary(0, 100) 
    fetch(`https://pokeapi.co/api/v2/pokemon/${String(randomize)}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("No good:", error);
    });
}
