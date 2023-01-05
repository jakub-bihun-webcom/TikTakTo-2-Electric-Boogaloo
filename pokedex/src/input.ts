export function searchPokemon() {
  const pokemonInput = document.getElementById('input') as HTMLInputElement;
  let inputValue = pokemonInput.value;
  console.log(inputValue);

  let messageText = document.getElementById('msg');

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
      throw new Error('The Pokémon ID has to be a number!');
    } else if (inputValue > 150 || inputValue < 0) {
      throw new Error('Only Pokémon IDs between 1 and 150 are being accepted!');
    } else {
      return true;
    }
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
   */
  function displayImage(inputValue: string) {
    const myImage = document.getElementById('myImage');
    myImage.removeAttribute('hidden');

    const image = document.getElementById('myImage') as HTMLImageElement;
    image.src = 'src/animated/' + inputValue + '.gif';
  }
}
