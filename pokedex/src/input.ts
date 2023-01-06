export function searchPokemon() {
  const pokemonInput = document.getElementById('input') as HTMLInputElement;
  let inputValue = pokemonInput.value;
  console.log(inputValue);
  let messageText = document.getElementById('msg');
  displayPokemonData();

  function displayPokemonData() {
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
  }

  /**
   * @param inputValue
   * @returns {boolean} true wenn der UserInput zwischen 1 und 700 liegt
   */
  function inputValidation(inputValue) {
    if (isNaN(inputValue)) {
      throw new Error('The Pokémon ID has to be a number!');
    } else if (inputValue > 700 || inputValue < 0) {
      throw new Error('Only Pokémon IDs between 1 and 700 are being accepted!');
    } else {
      return true;
    }
  }

  /**
   * @param inputValue (wenn isValid true ist)
   * @returns {Promise<*>} (den namen des Pokemon in einem Promise Objekt)
   */
  async function getPokemonName(inputValue: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const data = await response.json();
      const germanName = data.name;
      return germanName.charAt(0).toUpperCase() + germanName.slice(1) + ` (Nr. ${inputValue})`;
    } catch (error) {
      return 'An error occurred while trying to get the Pokemon name.';
    }
  }

  async function getPokemonImage(inputValue: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const data = await response.json();
      return data.sprites.front_default;
    } catch (error) {
      return 'Your Input does not return a Pokemon image. Please note that the Input cant be 0!';
    }
  }

  /**
   * zeigt das passende Bild zum inputValue
   */
  async function displayImage(inputValue: string) {
    const myImage = document.getElementById('myImage');
    myImage.removeAttribute('hidden');

    const image = document.getElementById('myImage') as HTMLImageElement;
    image.src = await getPokemonImage(inputValue);
  }
}
