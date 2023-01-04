window.onload = function () {
  document.getElementById('button').addEventListener('click', function () {
    let inputValue = parseInt(document.getElementById('input').value);
    console.log(inputValue);

    messageText = document.getElementById('msg');
    message = '';

    try {
      inputValidation(inputValue);
      displayImage(inputValue);
      getPokemonName(inputValue).then(name => {
        messageText.style.color = '#a2b9bc';
        messageText.innerText = name;
      });
    } catch (error) {
      messageText.style.color = '#850303';
      messageText.innerText = error.message;
    }

    /**
     * @param inputValue
     * @returns {boolean} true wenn der UserInput zwischen 1 und 150 liegt
     */
    function inputValidation(inputValue) {
      if (isNaN(inputValue)) {
        throw new Error('The Pokemon ID has to be a Number!');
      } else if (inputValue > 150 || inputValue < 0) {
        throw new Error('Only Pokemon IDs between 1 and 150 are being accepted!');
      } else {
        return true;
      }
    }

    /**
     * loggt den das Ergebnis der Abfrage mit dem UserInput
     */
    function logPokemonName() {
      getPokemonName(inputValue).then(name => console.log(name));
    }
    if (isValidInput(inputValue)) {
      logPokemonName();
    }

    /**
     * @param inputValue (wenn isValid true ist)
     * @returns {Promise<*>} (den namen des Pokemon in einem Promise Objekt)
     */
    async function getPokemonName(inputValue) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
        const data = await response.json();
        return data.name;
      } catch (error) {
        return 'Your Input does not return a Pokemon name. Please note that the Input cant be 0!';
      }
    }

    /**
     * zeigt das passende Bild zum inputValue
     * @param inputValue
     */
    function displayImage(inputValue) {
      let image = document.getElementById('myImage');
      image.src = 'src/animated/' + inputValue + '.gif';
    }
  });
};

let pokemonList = [];

for (let i = 1; i <= 150; i++) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemon) {
      pokemonList.push('Nr. ' + `${i} ` + pokemon.name);
    });
}

/**
 * Kreiert die eine Liste aller Pokemon Namen und zeigt diese im Popup an
 */
setTimeout(function () {
  let pokemonListElem = document.createElement('ul');
  pokemonList.forEach(function (pokemonName) {
    let li = document.createElement('li');
    li.textContent = pokemonName;
    pokemonListElem.appendChild(li);
  });

  let popup = document.getElementById('popup1');
  popup.querySelector('.content').appendChild(pokemonListElem);

  pokemonListElem.style.height = '650px';
}, 1000);

// Funktioniert noch nicht so, wie ichs gerne hätte :(
let image = document.getElementById('myImage');
image.src = './pokeball.gif';
