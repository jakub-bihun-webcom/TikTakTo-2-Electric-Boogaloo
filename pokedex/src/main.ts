import '@picocss/pico/css/pico.min.css';
import './style.css';
import { searchPokemon } from './input';
import { loadPokemons } from './load-pokemons';
import { sortPokemons } from './sort-pokemons';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<main class="container">
  <a class="logoDev" href="https://www.pokemon.com/de" target="_blank">
    <img src="/International_Pokémon_logo.svg.png" class="logo" alt="Pokemon logo" />
  </a>
  <h1>Pokedex</h1>
  <div class="inputField">
    <label for="inputField">Pokemon ID: </label>
    <input id="input" type="text" />
    <button class="searchButton" id="searchButton" type="button">Suche</button>
  </div>
  <div class="Output">
    <img id="myImage" hidden src="" class="animatedImage" alt="" />
    <p class="outputBox" id="msg" disabled></p>
  </div>
  <div class="box">
    <a class="button" id="popupButton" href="#popup1">Pokemon Liste</a>
  </div>

  <div id="popup1" class="overlay">
    <div class="popup">
      <h2>Pokemon List</h2>
      <a class="close" id="closePopupButton" href="#">&times;</a>
      <div id="popupContent" class="content"></div>
    </div>
    </div>
  </main>
`;

document.getElementById('searchButton').addEventListener('click', searchPokemon);
document.getElementById('popupButton').addEventListener('click', showPokemonList);
document.getElementById('closePopupButton').addEventListener('click', clearList);
const popupContent = document.getElementById('popupContent');

document.getElementById('input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchPokemon();
  }
});

async function showPokemonList() {
  const pokemons = await loadPokemons();
  const sortedPokemons = await sortPokemons(pokemons);
  const pokemonListElem = document.createElement('ul');
  sortedPokemons.forEach(function (sortedPokemons, i) {
    const li = document.createElement('li');
    li.textContent = 'Nr. ' + `${i + 1} ` + sortedPokemons.name.charAt(0).toUpperCase() + sortedPokemons.name.slice(1);
    pokemonListElem.appendChild(li);
  });

  const popup = document.getElementById('popup1');
  popup.querySelector('.content').appendChild(pokemonListElem);

  pokemonListElem.style.height = '550px';
}

function clearList() {
  popupContent.innerHTML = '';
}
