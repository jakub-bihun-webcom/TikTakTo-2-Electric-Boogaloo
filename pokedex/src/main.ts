import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
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
    <p class="outputBox" id="msg" disabled></p>
    </div>
  </div>

`;
