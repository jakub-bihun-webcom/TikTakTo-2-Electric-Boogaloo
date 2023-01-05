import '@picocss/pico/css/pico.min.css';
import './style.css';

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
    <img id="myImage" src="" class="animatedImage" alt="">
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
