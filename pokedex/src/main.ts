import '@picocss/pico/css/pico.min.css';
import './style.css';
import { searchPokemon } from './input';
import { loadPokemons } from './load-pokemons';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <main class="container">
    <a class="logoDev" href="https://www.pokemon.com/de" target="_blank">
      <img src="/International_Pokémon_logo.svg.png" class="logo" alt="Pokemon logo" />
    </a>
    <h1>Pokedex</h1>
    <div class="inputField">
      <label  for="inputField">Pokemon ID: </label>
      <input id="input" type="text">
      <button class="searchButton" id="searchButton" type="button">Suche</button>
    </div>
    <div class="Output">
      <img id="myImage" hidden src="" class="animatedImage" alt="">
      <p class="outputBox" id="msg" disabled></p>
    </div>
    <div class="box">
      <a class="button" id="popupButton" href="#popup1">Pokemon Liste</a>
    </div>
  
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Pokemon List</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
        </div>
      </div>
    </div>
    </div>
  </main>
`;

document.getElementById('searchButton').addEventListener('click', searchPokemon);
document.getElementById('popupButton').addEventListener('click', showPokemonList);

document.getElementById('input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchPokemon();
  }
});

async function showPokemonList() {
  // Pokemons laden
  const pokemons = await loadPokemons();

  // Pokemons sortieren --> TODO Joshua

  // Popup anzeigen
  const pokemonListElem = document.createElement('ul');
  pokemons.forEach(function (pokemon, i) {
    const li = document.createElement('li');
    li.textContent = 'Nr. ' + `${i + 1} ` + pokemon.name;
    console.log(pokemon);
    pokemonListElem.appendChild(li);
  });

  const popup = document.getElementById('popup1');
  popup.querySelector('.content').appendChild(pokemonListElem);

  pokemonListElem.style.height = '650px';
}
