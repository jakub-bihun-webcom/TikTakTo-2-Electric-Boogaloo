export async function searchPokemon() {
  const pokemonInput = document.getElementById('input') as HTMLInputElement;
  let inputValue = pokemonInput.value;
  console.log(inputValue);
  let messageText = document.getElementById('msg');

  try {
    validateInput(inputValue);

    const pokemonData = await loadPokemon(inputValue);

    // @ts-ignore
    displayImage(pokemonData.sprites.front_default);

    // @ts-ignore
    const germanName = pokemonData.name;
    const finalName = germanName.charAt(0).toUpperCase() + germanName.slice(1) + ` (Nr. ${inputValue})`;

    messageText.style.color = '#a2b9bc';
    messageText.innerText = finalName;
  } catch (error) {
    messageText.style.color = '#850303';
    messageText.innerText = '💩 ' + error.message;
    hideImage();
  }
}

function validateInput(inputValue: string): void {
  const pokemonId = parseInt(inputValue, 10);
  if (isNaN(pokemonId)) {
    throw new Error('The Pokémon ID has to be a number!');
  } else if (pokemonId > 700 || pokemonId < 0) {
    throw new Error('Only Pokémon IDs between 1 and 700 are being accepted!');
  }
}

async function loadPokemon(pokemonId: string): Promise<Object> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  return await response.json();
}

function displayImage(imageSrc: string): void {
  const myImage = findImage();
  myImage.removeAttribute('hidden');

  const image = document.getElementById('myImage') as HTMLImageElement;
  image.src = imageSrc;
}

function hideImage(): void {
  const myImage = findImage();
  myImage.setAttribute('hidden', undefined);
}

function findImage() {
  return document.getElementById('myImage');
}
