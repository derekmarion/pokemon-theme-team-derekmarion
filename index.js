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
        const type = function getTypes() {
            
        }
        console.log(name, type);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    // let text = document.createTextNode(`You caught a pokemon with id ${id}`);
    // document.body.appendChild(text);
}

button.addEventListener("click", catchEm);