const button = document.getElementById("button");

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function catchEm() {
    randomize = getRandomArbitrary(0, 100);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${String(randomize)}/`) //refactor to not include id in request, see axios docs
    .then(function (response) {
        console.log(response);
        //show picture, name, and type of pokemon
        const name = response.data.name;
        const type = response.data.types[0].type.name
        const sprite = response.data.sprites.front_default
        let text = document.createTextNode(`You caught a ${name.charAt(0).toUpperCase() + name.slice(1)}, a ${type}-type pokemon`);
        document.getElementById("output").appendChild(text);
        let image = document.createElement("img")
        image.src = sprite
        image.style.display = "block"
        document.getElementById("output").appendChild(image);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })
}

button.addEventListener("click", catchEm);