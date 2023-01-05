import '@picocss/pico/css/pico.min.css';
import './style.css';
import { searchPokemon } from './input';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <main class="container">
    <a href="https://www.pokemon.com/de" target="_blank">
      <img src="/International_Pokémon_logo.svg.png" class="logo" alt="Pokemon logo" />
    </a>
    <h1>Pokedex</h1>
    <div class="inputField">
      <label  for="inputField">Pokemon ID: </label>
      <input id="input" type="text">
      <button class="searchButton" id="button" type="button">Suche</button>
    </div>
    <div class="Output">
      <img id="myImage" hidden src="" class="animatedImage" alt="">
      <p class="outputBox" id="msg" disabled></p>
    </div>
    <div class="box">
      <a class="button" href="#popup1">Pokemon Liste</a>
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

window.onload = function () {};

document.getElementById('button').addEventListener('click', searchPokemon);

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
